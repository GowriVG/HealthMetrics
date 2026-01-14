using HealthMetrics.Api.Models;

namespace HealthMetrics.Api.Interfaces
{
  public interface IMetricsService
  {
    // Returns list of daily stats (used for Weight & Calorie charts)
    List<DailyMetrics> GetHistory();

    // Returns the breakdown for the doughnut chart
    List<WorkoutCategory> GetWorkoutSplit();
  }
}
