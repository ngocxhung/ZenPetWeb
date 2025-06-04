using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZenPetWeb.Data;
using ZenPetWeb.Models;

namespace ZenPetWeb.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ProductController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("Products")]
    public async Task<IActionResult> Products(
     [FromQuery] int? id,
     [FromQuery] int? categoryId,
     [FromQuery] string? keyword)
    {
        IQueryable<Product> query = _context.Products.Include(p => p.Category);

        if (id.HasValue)
        {
            query = query.Where(p => p.ProductId == id.Value);
        }
        else
        {
            if (categoryId.HasValue)
            {
                query = query.Where(p => p.CategoryId == categoryId.Value);
            }

            if (!string.IsNullOrWhiteSpace(keyword))
            {
                query = query.Where(p =>
                    p.ProductName.Contains(keyword) ||
                    p.Description.Contains(keyword));
            }
        }

        var products = await query.ToListAsync();
        return Ok(products);
    }

}