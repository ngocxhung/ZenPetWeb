using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ZenPetWeb.Data;

namespace ZenPetWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public CategoryController(ApplicationDbContext context)
        {
            _context = context;
        }
        // Get all categories
        [HttpGet("GetAll")]
        public IActionResult GetAllCategories()
        {
            var categories = _context.Categories.ToList();
            if (categories == null || !categories.Any())
            {
                return NotFound(new { message = "Không tìm thấy danh mục nào." });
            }
            return Ok(categories);


        }
    }
}
