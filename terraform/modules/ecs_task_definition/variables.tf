variable "family" {
  type        = string
  description = "Family name of the task definition"
}

variable "network_mode" {
  type        = string
  default     = "awsvpc"
  description = "Network mode for ECS task"
}

variable "requires_compatibilities" {
  type        = list(string)
  default     = ["FARGATE"]
  description = "Compatibility (e.g., FARGATE)"
}

variable "cpu" {
  type        = string
  default     = "256"
  description = "Task CPU units"
}

variable "memory" {
  type        = string
  default     = "512"
  description = "Task memory (in MiB)"
}

variable "execution_role_arn" {
  type        = string
  description = "IAM role ARN for ECS task execution"
}

variable "container_name" {
  type        = string
  description = "Name of the container"
}

variable "container_image" {
  type        = string
  description = "Container image"
}

variable "container_port" {
  type        = number
  description = "Port the container listens on"
}
