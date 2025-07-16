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



#resource "aws_lb" "main" {
# name               = "lb-alb"
# internal           = false
#load_balancer_type = "application"
# security_groups    = [module.lb_sg.id]

# subnets = module.network.public_subnets.ids

# tags = {
# Name = "lb-public-alb"
# }
#}





#resource "aws_lb_target_group" "ecs_tg" {
# name        = "ecs-tg"
#  port        = 80
#  protocol    = "HTTP"
# vpc_id      = module.network.vpc_network.id
# target_type = "ip"

#health_check {
#  path                = "/"
# port                = "80"
# protocol            = "HTTP"
# matcher             = "200"
# interval            = 30
# timeout             = 5
# healthy_threshold   = 2
# unhealthy_threshold = 2
#}
#}




#resource "aws_lb_listener" "http" {
#load_balancer_arn = aws_lb.main.arn
#port              = 80
#protocol          = "HTTP"

#default_action {
#  type             = "forward"
#  target_group_arn = aws_lb_target_group.ecs_tg.arn
# }
#}

module "task_definition" {
  source             = "./modules/ecs_task_definition"
  family             = "my-task"
  execution_role_arn = data.aws_iam_role.ecs_task_execution_role.arn
  container_name     = "web"
  container_image    = "public.ecr.aws/k1o2c9m2/apprepo:latest"
  container_port     = 80
}

#resource "aws_ecs_task_definition" "web" {
# family                   = "my-task"
# network_mode             = "awsvpc"
# requires_compatibilities = ["FARGATE"]
#cpu                      = "256"
# memory                   = "512"
# execution_role_arn       = data.aws_iam_role.ecs_task_execution_role.arn

#container_definitions = jsonencode([{
#name      = "web"
# image     = "public.ecr.aws/k1o2c9m2/apprepo:latest"
#essential = true
# portMappings = [{
# containerPort = 80
#hostPort      = 80
# protocol      = "tcp"
# }]
#}])
#}
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
  #target_group_arn    = aws_lb_target_group.ecs_tg.arn
  container_name = "web"
  container_port = 80
  depends_on = [module.alb]
  #depends_on  = [module.alb.http_listener_arn]
  #depends_on          = [aws_lb_listener.http]
}

#resource "aws_ecs_service" "web" {
#name            = "web-service"
#cluster         = aws_ecs_cluster.main.id
# task_definition = aws_ecs_task_definition.web.arn
#desired_count   = 1
#launch_type     = "FARGATE"

#network_configuration {
#subnets          = module.network.private_subnets.ids
# assign_public_ip = true
#  security_groups  = [module .ecs_sg.id]
#}

#load_balancer {
#  target_group_arn = aws_lb_target_group.ecs_tg.arn
# container_name   = "web"
# container_port   = 80
#}

#depends_on = [aws_lb_listener.http]
#}

#output "load_balancer_dns" {
#description = "Public ALB URL"
#value       = aws_lb.main.dns_name
#}


#module "ecs_cluster" 
#module "ecs_service" 

module "ecs_autoscaling" {
  source      = "./modules/ecs_autoscaling"
  resource_id = "service/${module.ecs_cluster.name}/${module.ecs_service.service_name}"
  #resource_id         = "service/${aws_ecs_cluster.main.name}/${aws_ecs_service.web.name}"
  min_capacity       = 1
  max_capacity       = 5
  policy_name        = "cpu-scale-policy"
  target_value       = 70
  scale_in_cooldown  = 60
  scale_out_cooldown = 60
}


#resource "aws_appautoscaling_target" "ecs_scale_target" {
#max_capacity       = 5
# min_capacity       = 1
#resource_id        = "service/${aws_ecs_cluster.main.name}/${aws_ecs_service.web.name}"
#scalable_dimension = "ecs:service:DesiredCount"
# service_namespace  = "ecs"
#}

#resource "aws_appautoscaling_policy" "cpu_policy" {
# name               = "cpu-scale-policy"
#policy_type        = "TargetTrackingScaling"
# resource_id        = aws_appautoscaling_target.ecs_scale_target.resource_id
#scalable_dimension = aws_appautoscaling_target.ecs_scale_target.scalable_dimension
# service_namespace  = aws_appautoscaling_target.ecs_scale_target.service_namespace

#target_tracking_scaling_policy_configuration {
#target_value       = 70.0
#predefined_metric_specification {
#  predefined_metric_type = "ECSServiceAverageCPUUtilization"
# }
#scale_in_cooldown  = 60
#scale_out_cooldown = 60
#}
#}
