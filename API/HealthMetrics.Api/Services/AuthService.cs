using HealthMetrics.Api.Interfaces;
using HealthMetrics.Api.Models;

namespace HealthMetrics.Api.Services
{
  // Handles authentication logic
  public class AuthService : IAuthService
  {
    // Temporary in-memory user (NO DATABASE YET)
    private static User? _currentUser;

    public bool Register(RegisterRequest request)
    {
      // Prevent multiple users (demo purpose)
      if (_currentUser != null)
        return false;

      _currentUser = new User
      {
        Username = request.Username,
        Email = request.Email,
        Password = request.Password
      };

      return true;
    }

    public bool Login(LoginRequest request)
    {
      if (_currentUser == null)
        return false;

      return _currentUser.Username == request.Username &&
             _currentUser.Password == request.Password;
    }

    public User? GetLoggedUser()
    {
      return _currentUser;
    }

    public void Logout()
    {
      _currentUser = null;
    }
  }
}
