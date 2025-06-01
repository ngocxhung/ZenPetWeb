using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

using Microsoft.Extensions.FileProviders;
using System.IO;
using ZenPetWeb.Data;
public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        
        // Add CORS
        builder.Services.AddCors(options =>
        {
            options.AddDefaultPolicy(builder =>
            {
                builder
                    .WithOrigins("http://localhost:3000")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .WithExposedHeaders("Content-Disposition")
                    .SetIsOriginAllowed(origin => true);
            });
        });

        // Add DbContext
        builder.Services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
        builder.Services.AddScoped<ApplicationDbContext>();

        // Add JWT Authentication
        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = builder.Configuration["Jwt:Issuer"],
                    ValidAudience = builder.Configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
                };
            });

        var app = builder.Build();
        using (var scope = app.Services.CreateScope())
        {
            /*var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            if (!context.Products.Any(p => p.Name == "Chíp định vị thú cưng"))
            {
                var product = new Product
                {
                    Name = "Chíp định vị thú cưng",
                    Description = "Chíp định vị thông minh giúp bạn theo dõi thú cưng mọi lúc mọi nơi.",
                    Price = 499000, // Giá tham khảo, có thể chỉnh
                    Stock = 20, // Số lượng tùy ý
                    Category = "Phụ kiện",
                    ImageUrl = "img/chipdinhvi.png",
                    Status = true
                };
                context.Products.Add(product);
                context.SaveChanges();
            }*/
        }
        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseDeveloperExceptionPage();
        }

        // Use CORS before other middleware
        app.UseCors(builder =>
        {
            builder
                .WithOrigins("http://localhost:3000")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
                .WithExposedHeaders("Content-Disposition")
                .SetIsOriginAllowed(origin => true);
        });

        // Remove HTTPS redirection in development
        if (!app.Environment.IsDevelopment())
        {
            app.UseHttpsRedirection();
        }
        
        // Add authentication middleware
        app.UseAuthentication();
        app.UseAuthorization();
        app.UseStaticFiles(); // Đảm bảo đã có dòng này
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "img")),
            RequestPath = "/img"
        });
        app.MapControllers();

        app.Run();
    }
}