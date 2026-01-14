using HealthMetrics.Api.Models;

namespace HealthMetrics.Api.Interfaces
{
  public interface IDashboardService
  {
    DashboardSummary GetSummary();
  }
}
