namespace HealthMetrics.Api.Models
{
  public class LoginRequest
  {
    // We only need these two fields to log in
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
  }
}
