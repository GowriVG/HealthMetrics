using HealthMetrics.Api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HealthMetrics.Api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DietController : ControllerBase
  {
    private readonly IDietService _dietService;

    public DietController(IDietService dietService)
    {
      _dietService = dietService;
    }

    // GET: api/Diet/Monday
    [HttpGet("{day}")]
    public IActionResult GetDietPlan(string day)
    {
      var meals = _dietService.GetMealsForDay(day);

      // If no meals found (e.g., Sunday), return an empty list, not an error
      return Ok(meals);
    }
  }
}
