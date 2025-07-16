output "task_definition_arn" {
  value       = aws_ecs_task_definition.this.arn
  description = "ARN of the ECS task definition"
}
