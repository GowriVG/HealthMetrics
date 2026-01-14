namespace HealthMetrics.Api.Models
{
  public class WorkoutCategory
  {
    public string CategoryName { get; set; } = string.Empty; // e.g., "Cardio"
    public int Percentage { get; set; } // e.g., 45
  }
}
