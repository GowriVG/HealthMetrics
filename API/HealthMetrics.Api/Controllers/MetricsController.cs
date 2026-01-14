using HealthMetrics.Api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HealthMetrics.Api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MetricsController : ControllerBase
  {
    private readonly IMetricsService _metricsService;

    public MetricsController(IMetricsService metricsService)
    {
      _metricsService = metricsService;
    }

    // GET: api/metrics/history
    [HttpGet("history")]
    public IActionResult GetHistory()
    {
      var data = _metricsService.GetHistory();
      return Ok(data);
    }

    // GET: api/metrics/split
    [HttpGet("split")]
    public IActionResult GetWorkoutSplit()
    {
      var data = _metricsService.GetWorkoutSplit();
      return Ok(data);
    }
  }
}
