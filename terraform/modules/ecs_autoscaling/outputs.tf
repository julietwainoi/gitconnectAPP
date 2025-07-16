output "autoscaling_target_arn" {
  description = "ARN of the autoscaling target"
  value       = aws_appautoscaling_target.this.arn
}

output "autoscaling_policy_name" {
  description = "Name of the autoscaling policy"
  value       = aws_appautoscaling_policy.cpu_policy.name
}
