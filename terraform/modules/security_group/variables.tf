variable "name" {
  description = "Name of the security group"
  type        = string
  # default     = "default-sg-name"  <-- Optional
}

variable "description" {
  description = "Description of the security group"
  type        = string
  default     = "Managed by Terraform"  # <-- This avoids prompts
}

variable "vpc_id" {
description = "Description of the vpc_id"
  type      = string
}
variable "ingress_with_source_security_group_id" {
  description = "List of ingress rules with source security group IDs"
  type = list(object({
    from_port                = number
    to_port                  = number
    protocol                 = string
    source_security_group_id = string
  }))
  default = []
}

variable "ingress_with_cidr_blocks" {
  description = "List of ingress rules with CIDR blocks"
  type = list(object({
    from_port   = number
    to_port     = number
    protocol    = string
    cidr_blocks = string
  }))
  default = []
}