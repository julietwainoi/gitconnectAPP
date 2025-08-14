variable "cluster_name" {
  type        = string
  description = "Name of the ECS cluster"
}

variable "service_name" {
  type        = string
  description = "Name of the ECS service"
}

variable "alb_resource_label" {
  type        = string
  description = "ALB resource label in format: <load-balancer-name>/<target-group-name> (arn_suffixes)"
}

variable "policy_name" {
  type        = string
  description = "Name of the auto scaling policy"
  default     = "ecs-scale-on-alb-requests"
}

variable "min_capacity" {
  type        = number
  default     = 1
}

variable "max_capacity" {
  type        = number
  default     = 5
}

variable "target_value" {
  type        = number
  description = "Requests per target before scaling"
  default     = 100
}

variable "scale_in_cooldown" {
  type        = number
  default     = 60
}

variable "scale_out_cooldown" {
  type        = number
  default     = 60
}


