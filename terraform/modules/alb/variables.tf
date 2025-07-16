variable "lb_name" {
  type        = string
  description = "Name of the ALB"
}

variable "internal" {
  type        = bool
  description = "Whether the load balancer is internal or external"
}

variable "security_group_ids" {
  type        = list(string)
  description = "List of security group IDs attached to the ALB"
}

variable "public_subnet_ids" {
  type        = list(string)
  description = "List of public subnet IDs for the ALB"
}

variable "vpc_id" {
  type        = string
  description = "VPC ID"
}

variable "tg_name" {
  type        = string
  description = "Target group name"
}

variable "tg_port" {
  type        = number
  default     = 80
  description = "Port for the target group"
}

variable "health_check_path" {
  type        = string
  default     = "/"
  description = "Health check path for the target group"
}
