variable "name" {
  description = "Name of the security group"
  type        = string
}

variable "description" {
  description = "Description of the security group"
  type        = string
  default     = "Managed by Terraform"
}

variable "vpc_id" {
  description = "The VPC ID where the security group will be created"
  type        = string
}

variable "ingress_with_sg_ids" {
  description = "List of security group rules with source security group IDs"
  type = list(object({
    from_port                = number
    to_port                  = number
    protocol                 = string
    source_security_group_id = string
    description              = optional(string)
  }))
  default = []
}
