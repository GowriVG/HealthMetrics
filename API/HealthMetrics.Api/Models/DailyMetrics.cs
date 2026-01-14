namespace HealthMetrics.Api.Models
{
  public class DailyMetrics
  {
    public DateTime Date { get; set; }

    // Stats for graphs
    public double Weight { get; set; }
    public int CaloriesBurned { get; set; }
    public int CaloriesConsumed { get; set; }
    public int WorkoutDurationMins { get; set; }
  }
}
