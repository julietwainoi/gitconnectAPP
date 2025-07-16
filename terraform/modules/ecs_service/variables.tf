variable "name" {
  type        = string
  description = "Name of the ECS service"
}

variable "cluster_id" {
  type        = string
  description = "ID of the ECS cluster"
}

variable "task_definition_arn" {
  type        = string
  description = "ARN of the ECS task definition"
}

variable "desired_count" {
  type        = number
  default     = 1
  description = "Desired number of ECS tasks"
}

variable "subnet_ids" {
  type        = list(string)
  description = "List of subnet IDs for ECS service networking"
}

variable "assign_public_ip" {
  type        = bool
  default     = false
  description = "Whether to assign a public IP"
}

variable "security_group_ids" {
  type        = list(string)
  description = "List of security group IDs"
}

variable "target_group_arn" {
  type        = string
  description = "ARN of the ALB Target Group"
}

variable "container_name" {
  type        = string
  description = "Name of the container"
}

variable "container_port" {
  type        = number
  description = "Port container listens on"
}

variable "ecs_dependencies" {
  description = "Explicit dependencies to enforce ECS service ordering"
  type        = list(any)
  default     = []
}
