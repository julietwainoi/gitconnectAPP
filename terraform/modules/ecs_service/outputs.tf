output "service_name" {
  value       = aws_ecs_service.this.name
  description = "The name of the ECS service"
}

output "service_arn" {
  value       = aws_ecs_service.this.arn
  description = "The ARN of the ECS service"
}
