using HealthMetrics.Api.Interfaces;
using HealthMetrics.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// 1. Add services to the container.
builder.Services.AddControllers();

// Register Services
builder.Services.AddSingleton<IAuthService, AuthService>();
builder.Services.AddSingleton<IDashboardService, DashboardService>();
builder.Services.AddSingleton<IMetricsService, MetricsService>();
builder.Services.AddSingleton<IDietService, DietService>();


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 2. CONFIGURE CORS HERE (Before Build)
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowAngular",
      policy => policy.WithOrigins("http://localhost:4200") // Your Angular URL
                      .AllowAnyHeader()
                      .AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// 3. ENABLE CORS HERE (Before Authorization)
app.UseCors("AllowAngular");

app.UseAuthorization();

app.MapControllers();

app.Run(); // The app starts here. Nothing runs after this line.
