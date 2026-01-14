namespace HealthMetrics.Api.Models
{
  public class User
  {
    public int Id { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;

    // --- Profile Details ---
    public int Age { get; set; }
    public double Height { get; set; } // stored in cm
    public double Weight { get; set; } // stored in kg
    public string Gender { get; set; } = "Not Specified";
    public string ActivityLevel { get; set; } = "Moderate"; // e.g., Sedentary, Active
  }
}
