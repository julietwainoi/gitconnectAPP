output "alb_arn" {
  value       = aws_lb.this.arn
  description = "ARN of the ALB"
}

output "alb_dns_name" {
  value       = aws_lb.this.dns_name
  description = "DNS name of the ALB"
}

output "target_group_arn" {
  value       = aws_lb_target_group.this.arn
  description = "ARN of the target group"
}
output "http_listener_arn" {
  description = "HTTP Listener ARN for the ALB"
  value       = aws_lb_listener.http.arn
}
