using HealthMetrics.Api.Interfaces;
using HealthMetrics.Api.Models;

namespace HealthMetrics.Api.Services
{
  public class DietService : IDietService
  {
    // Mock Database of Meals
    private static List<DietMeal> _allMeals = new List<DietMeal>
        {
            // --- MONDAY ---
            new DietMeal { Id=1, Day="Monday", Type="Breakfast", Name="Avocado Toast & Egg", Calories=450, Time="8:00 AM", ImageUrl="https://images.unsplash.com/photo-1525351484163-7529414395d8?w=500&q=80" },
            new DietMeal { Id=2, Day="Monday", Type="Lunch", Name="Grilled Chicken Salad", Calories=600, Time="1:00 PM", ImageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80" },
            new DietMeal { Id=3, Day="Monday", Type="Snack", Name="Greek Yogurt & Berries", Calories=150, Time="4:30 PM", ImageUrl="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=80" },
            new DietMeal { Id=4, Day="Monday", Type="Dinner", Name="Salmon with Asparagus", Calories=500, Time="7:30 PM", ImageUrl="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&q=80" },

            // --- TUESDAY ---
            new DietMeal { Id=5, Day="Tuesday", Type="Breakfast", Name="Oatmeal with Honey", Calories=350, Time="8:00 AM", ImageUrl="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=200&q=80" },
            new DietMeal { Id=6, Day="Tuesday", Type="Lunch", Name="Quinoa & Veggie Bowl", Calories=550, Time="1:00 PM", ImageUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80" },
            new DietMeal { Id=7, Day="Tuesday", Type="Snack", Name="Apple & Peanut Butter", Calories=200, Time="4:30 PM", ImageUrl="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80" },
            new DietMeal { Id=8, Day="Tuesday", Type="Dinner", Name="Turkey Stir Fry", Calories=480, Time="7:30 PM", ImageUrl="https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=200&q=80" }
        };

    public List<DietMeal> GetMealsForDay(string day)
    {
      // Filter the list by Day (Case insensitive)
      return _allMeals.Where(m => m.Day.Equals(day, StringComparison.OrdinalIgnoreCase)).ToList();
    }
  }
}
