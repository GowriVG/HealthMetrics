using HealthMetrics.Api.Models;

namespace HealthMetrics.Api.Interfaces
{
  public interface IAuthService
  {
    bool Register(RegisterRequest request);
    bool Login(LoginRequest request);
    User? GetLoggedUser();
    void Logout();
  }
}
