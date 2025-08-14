provider "aws" {
  region = "us-east-1"
}

module "network" {
  source   = "./modules/network"
  name     = "vpc_network"
  vpc_cidr = "10.0.0.0/16"

  public_subnet_cidrs = {
    "us-east-1a" = "10.0.0.0/24"
    "us-east-1b" = "10.0.1.0/24"
  }

  private_subnet_cidrs = {
    "us-east-1a" = "10.0.2.0/24"
    "us-east-1b" = "10.0.3.0/24"
  }
}






module "lb_sg" {
  source      = "./modules/security_group"
  name        = "lb_sg"
  description = "Allow HTTP from internet"
  vpc_id      = module.network.vpc_id

  # Allow public HTTP from internet
  ingress_with_cidr_blocks = [
    {
      from_port   = 80
      to_port     = 80
      protocol    = "tcp"
      cidr_blocks = "0.0.0.0/0"
    }
  ]
}


module "ecs_sg" {
  source      = "./modules/security_group"
  name        = "ecs_sg"
  description = "Allow traffic from ALB"
  vpc_id      = module.network.vpc_id
  ingress_with_source_security_group_id = [
    {
      from_port                = 80
      to_port                  = 80
      protocol                 = "tcp"
      source_security_group_id = module.lb_sg.security_group_id
    }
  ]
}




module "ecs_cluster" {
  source       = "./modules/ecs_cluster"
  cluster_name = "my-ecs-cluster"
}


data "aws_iam_role" "ecs_task_execution_role" {
  name = "ecsTaskExecutionRole"
}

module "alb" {
  source = "./modules/alb"

  lb_name            = "lb-alb"
  internal           = false
  security_group_ids = [module.lb_sg.security_group_id]
  
  public_subnet_ids  = module.network.public_subnets
  vpc_id             = module.network.vpc_id

  tg_name           = "ecs-tg"
  tg_port           = 80
  health_check_path = "/"
}







module "task_definition" {
  source             = "./modules/ecs_task_definition"
  family             = "my-task"
  execution_role_arn = data.aws_iam_role.ecs_task_execution_role.arn
  container_name     = "web"
  container_image    = "public.ecr.aws/k1o2c9m2/apprepo:latest"
  container_port     = 80
  cpu                = "256"
  memory             = "512"
}


module "ecs_service" {
  source              = "./modules/ecs_service"
  name                = "web-service"
  cluster_id          = module.ecs_cluster.cluster_id
  task_definition_arn = module.task_definition.task_definition_arn
  desired_count       = 1
  subnet_ids          = module.network.private_subnets
  assign_public_ip    = false
  security_group_ids = [module.ecs_sg.security_group_id]

  target_group_arn    = module.alb.target_group_arn
  container_name = "web"
  container_port = 80
  depends_on = [module.alb]

}





module "ecs_autoscaling" {
 source      = "./modules/ecs_autoscaling"
 resource_id = "service/${module.ecs_cluster.name}/${module.ecs_service.service_name}"
  min_capacity       = 1
  max_capacity       = 5
  policy_name        = "cpu-scale-policy"
  target_value       = 70
  scale_in_cooldown  = 60
 scale_out_cooldown = 60
}

locals {
 alb_resource_label = "${replace(module.alb.lb_arn_suffix, "loadbalancer/", "")}/${replace(module.alb.tg_arn_suffix, "targetgroup/", "")}"
}

module "ecs_alb_request_scaling" {
  source = "./modules/ecs_alb_scaling" # path to your module

  cluster_name        = "ecs-cluster"
  service_name        = "ecs-service"
  policy_name         = "scale-on-requests"
  min_capacity        = 2
  max_capacity        = 10
  target_value        = 150
  scale_in_cooldown   = 30
  scale_out_cooldown  = 30

 alb_resource_label  = local.alb_resource_label
 #alb_resource_label  = "${replace(module.alb.lb_arn_suffix, "loadbalancer/", "")}/${replace(module.alb.tg_arn_suffix, "targetgroup/", "")}"
}
