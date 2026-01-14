namespace HealthMetrics.Api.Models
{
  public class DietMeal
  {
    public int Id { get; set; }
    public string Day { get; set; } = "Monday"; // e.g., Monday, Tuesday
    public string Type { get; set; } = "Breakfast"; // Breakfast, Lunch...
    public string Name { get; set; } = string.Empty;
    public int Calories { get; set; }
    public string Time { get; set; } = "8:00 AM";
    public string ImageUrl { get; set; } = string.Empty;
  }
}
