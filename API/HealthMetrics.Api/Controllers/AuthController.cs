using HealthMetrics.Api.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HealthMetrics.Api.Models;

namespace HealthMetrics.Api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    private readonly IAuthService _authService;

    // Dependency Injection
    public AuthController(IAuthService authService)
    {
      _authService = authService;
    }

    // POST: api/auth/register
    [HttpPost("register")]
    public IActionResult Register(RegisterRequest request)
    {
      var result = _authService.Register(request);

      if (!result)
        return BadRequest("User already exists");

      return Ok("Registration successful");
    }

    // POST: api/auth/login
    [HttpPost("login")]
    public IActionResult Login(LoginRequest request)
    {
      var result = _authService.Login(request);

      if (!result)
        return Unauthorized("Invalid credentials");

      return Ok("Login successful");
    }

    // GET: api/auth/user
    [HttpGet("user")]
    public IActionResult GetUser()
    {
      var user = _authService.GetLoggedUser();
      return Ok(user);
    }

    // POST: api/auth/logout
    [HttpPost("logout")]
    public IActionResult Logout()
    {
      _authService.Logout();
      return Ok("Logged out");
    }
  }
}
