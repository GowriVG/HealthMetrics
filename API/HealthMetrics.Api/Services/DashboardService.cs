using HealthMetrics.Api.Interfaces;
using HealthMetrics.Api.Models;

namespace HealthMetrics.Api.Services
{
  // Provides dashboard overview data
  public class DashboardService : IDashboardService
  {
    public DashboardSummary GetSummary()
    {
      // Static mock data (can be replaced with DB later)
      return new DashboardSummary
      {
        CaloriesEaten = 13100,
        StepsTaken = 52100,
        WaterConsumed = 38.7,
        SleepDuration = 50
      };
    }
  }
}
