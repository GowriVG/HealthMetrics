using HealthMetrics.Api.Models;

namespace HealthMetrics.Api.Interfaces
{
  public interface IDietService
  {
    // Get meals for a specific day (e.g., "Monday")
    List<DietMeal> GetMealsForDay(string day);
  }
}
