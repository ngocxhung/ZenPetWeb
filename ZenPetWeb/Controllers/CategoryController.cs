using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using ZenPetWeb.Data;
using ZenPetWeb.Models;

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
        // Add a new category
        [HttpPost("AddCategory)")]
        public async Task<IActionResult> AddCategory([FromForm] CategoryDTO catgory)
        {
            if(catgory == null)
            {
                return BadRequest(new { message = "Dữ liệu danh mục không hợp lệ." });
            }
            var newCategory = new Category
            {
                CategoryName = catgory.CategoryName,
                CreateAt = DateTime.UtcNow, // Thời gian tạo
                UpdateTime = DateTime.UtcNow // Thời gian cập nhật
            };
            _context.Categories.Add(newCategory);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAllCategories), new { id = newCategory.CategoryId }, newCategory);

        }
        // Update an existing category
        [HttpPut("UpdateCategory/{id}")]
        public async Task<IActionResult> UpdateCategory(int id, [FromForm] CategoryDTO categoryDto)
        {
            if (categoryDto == null)
            {
                return BadRequest(new { message = "Dữ liệu danh mục không hợp lệ." });
            }
            var existingCategory = await _context.Categories.FindAsync(id);
            if (existingCategory == null)
            {
                return NotFound(new { message = "Danh mục không tồn tại." });
            }
            existingCategory.CategoryName = categoryDto.CategoryName;
            existingCategory.UpdateTime = DateTime.UtcNow; // Cập nhật thời gian cập nhật
            await _context.SaveChangesAsync();
            return NoContent();
        }
        // Delete a category
        [HttpDelete("DeleteCategory/{id}")]
        public async Task<IActionResult> DeleteCategory(int? id)
        {
            // Kiểm tra xem ID có trống không 
            if(id == null)
            {
                return BadRequest(new { Message="ID danh mục không hợp lệ." });
            }
            var category = await _context.Categories.FindAsync(id);
            if(category == null)
            {
                return NotFound(new { Message = "Danh mục không tồn tại." });

            }
            // Nếu danh mục có sản phẩm liên kết, xóa toàn bộ sản phẩm liên kết
            // Kiểm tra xem danh mục có sản phẩm liên kết không
            if(_context.Products.Any(p => p.CategoryId == id))
            {
                var products = _context.Products.Where(p => p.CategoryId == id).ToList();
                _context.Products.RemoveRange(products); // Xóa tất cả sản phẩm liên kết với danh mục này

            }
            _context.Categories.Remove(category); // Xóa danh mục
            _context.SaveChanges(); // Lưu thay đổi vào cơ sở dữ liệu
            return NoContent();

        }
    }
}
