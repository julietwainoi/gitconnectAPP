output "public_subnets" {
  value = module.network.public_subnets
}

output "private_subnets" {
  value = module.network.private_subnets
}
output "load_balancer_dns" {
  description = "Public ALB URL"
  value       = module.alb.alb_dns_name
}
