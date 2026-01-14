using HealthMetrics.Api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HealthMetrics.Api.Controllers
{
  [ApiController]
  [Route("api/dashboard")]
  public class DashboardController : ControllerBase
  {
    private readonly IDashboardService _dashboardService;

    public DashboardController(IDashboardService dashboardService)
    {
      _dashboardService = dashboardService;
    }

    // GET: api/dashboard/summary
    [HttpGet("summary")]
    public IActionResult GetSummary()
    {
      var summary = _dashboardService.GetSummary();
      return Ok(summary);
    }
  }
}
