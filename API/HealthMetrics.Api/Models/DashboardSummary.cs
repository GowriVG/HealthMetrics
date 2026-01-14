namespace HealthMetrics.Api.Models
{
  // Represents the top 4 dashboard cards
  public class DashboardSummary
  {
    public int CaloriesEaten { get; set; }
    public int StepsTaken { get; set; }
    public double WaterConsumed { get; set; } // in liters
    public int SleepDuration { get; set; }    // in hours
  }
}
