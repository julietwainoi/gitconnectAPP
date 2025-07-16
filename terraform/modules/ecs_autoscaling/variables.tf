variable "resource_id" {
  type        = string
  description = "Resource ID in format service/clusterName/serviceName"
}

variable "max_capacity" {
  type        = number
  description = "Maximum number of ECS tasks"
}

variable "min_capacity" {
  type        = number
  description = "Minimum number of ECS tasks"
}

variable "policy_name" {
  type        = string
  default     = "cpu-scale-policy"
  description = "Name of the autoscaling policy"
}

variable "target_value" {
  type        = number
  default     = 70.0
  description = "Target CPU utilization percentage"
}

variable "scale_in_cooldown" {
  type        = number
  default     = 60
  description = "Cooldown period after scale-in"
}

variable "scale_out_cooldown" {
  type        = number
  default     = 60
  description = "Cooldown period after scale-out"
}
