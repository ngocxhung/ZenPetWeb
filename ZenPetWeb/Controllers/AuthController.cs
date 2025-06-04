using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZenPetWeb.Data;
using ZenPetWeb.Models;
using BCrypt.Net;

namespace ZenPetWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        // ✅ POST: api/Auth/Register
        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto dto)
        {
            if (await _context.Users.AnyAsync(u => u.UserName == dto.UserName || u.Email == dto.Email))
            {
                return BadRequest("User already exists.");
            }

            var user = new User
            {
                UserName = dto.UserName,
                FullName = dto.FullName,
                Password = (dto.Password), // ✅ Mã hóa mật khẩu tại đây
                Email = dto.Email,
                PhoneNumber = dto.PhoneNumber,
                Address = dto.Address,
                Role = dto.Role,
                ProfilePictureUrl = dto.ProfilePictureUrl,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful" });
        }


        // ✅ POST: api/Auth/Login
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest model)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == model.UserName);
            if (user == null )
            {
                return Unauthorized("Invalid username or password");
            }

            return Ok(new
            {
                message = "Login successful",
                user = new
                {
                    user.UserId,
                    user.UserName,
                    user.FullName,
                    user.Role,
                    user.Email
                }
            });
        }


        // ✅ POST: api/Auth/Logout
        [HttpPost("Logout")]
        public IActionResult Logout()
        {
            // Nếu bạn dùng JWT thì chỉ cần xóa token phía client
            return Ok(new { message = "Logout successful" });
        }
    }

    // DTO cho đăng nhập
    public class LoginRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
    public class RegisterUserDto
    {
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string Role { get; set; }
        public string? ProfilePictureUrl { get; set; }
    }

}
