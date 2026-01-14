using HealthMetrics.Api.Interfaces;
using HealthMetrics.Api.Models;

namespace HealthMetrics.Api.Services
{
  public class MetricsService : IMetricsService
  {
    public List<DailyMetrics> GetHistory()
    {
      // Mock Data: Simulating the last 6 months of data
      // This populates the Weight Line Chart and Calorie Bar Chart
      return new List<DailyMetrics>
            {
                new DailyMetrics { Date = new DateTime(2025, 1, 1), Weight = 78.0, CaloriesConsumed = 2100, CaloriesBurned = 2400 },
                new DailyMetrics { Date = new DateTime(2025, 2, 1), Weight = 77.0, CaloriesConsumed = 1900, CaloriesBurned = 2200 },
                new DailyMetrics { Date = new DateTime(2025, 3, 1), Weight = 76.5, CaloriesConsumed = 2300, CaloriesBurned = 2100 },
                new DailyMetrics { Date = new DateTime(2025, 4, 1), Weight = 75.0, CaloriesConsumed = 2000, CaloriesBurned = 2300 },
                new DailyMetrics { Date = new DateTime(2025, 5, 1), Weight = 74.2, CaloriesConsumed = 1800, CaloriesBurned = 2400 },
                new DailyMetrics { Date = new DateTime(2025, 6, 1), Weight = 73.5, CaloriesConsumed = 2500, CaloriesBurned = 2000 }
            };
    }

    public List<WorkoutCategory> GetWorkoutSplit()
    {
      // Mock Data: Simulating Workout Distribution (Doughnut Chart)
      return new List<WorkoutCategory>
            {
                new WorkoutCategory { CategoryName = "Cardio", Percentage = 45 },
                new WorkoutCategory { CategoryName = "Strength", Percentage = 30 },
                new WorkoutCategory { CategoryName = "Yoga", Percentage = 25 }
            };
    }
  }
}
