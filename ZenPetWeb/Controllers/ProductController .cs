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
    // Get all products
    [HttpGet("GetAll")]
    public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts()
    {
        return await _context.Products
            .Include(p => p.Category)
            .ToListAsync();
    }
    // Get product by ID
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProductById(int? id)
    {
        var product = await _context.Products
            .Include(p => p.Category)
            .FirstOrDefaultAsync(p => p.ProductId == id);
        if (product == null)
        {
            return NotFound();
        }
        return product;
    }
    // Add a new product
    [HttpPost("Add")]
    public async Task<ActionResult<ProducTDTO>> AddProduct(ProducTDTO productDto)
    {
        if (productDto == null)
        {
            return BadRequest("Product data is null");
        }
        var product = new Product
        {
            ProductName = productDto.ProductName,
            Description = productDto.Description,
            Price = productDto.Price,
            Stock = productDto.Stock,
            CategoryId = productDto.CategoryId,
            ImageUrl = productDto.ImageUrl,
            IsActive = productDto.IsActive,
            Rating = productDto.Rating,
            Discount = productDto.Discount,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetProductById), new { id = product.ProductId }, product);
    }
    // Update an existing product
    [HttpPut("Update/{id}")]
    public async Task<IActionResult> UpdateProduct(int id, ProducTDTO productDto)
    {
        if (id != productDto.ProductId)
        {
            return BadRequest("Product ID mismatch");
        }
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }
        product.ProductName = productDto.ProductName;
        product.Description = productDto.Description;
        product.Price = productDto.Price;
        product.Stock = productDto.Stock;
        product.CategoryId = productDto.CategoryId;
        product.ImageUrl = productDto.ImageUrl;
        product.IsActive = productDto.IsActive;
        product.Rating = productDto.Rating;
        product.Discount = productDto.Discount;
        product.UpdatedAt = DateTime.UtcNow;
        _context.Entry(product).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }
    // Delete a product
    [HttpDelete("Delete/{id}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }
        // Check if the product is associated with any orders or reviews
        if (product.OrderDetails.Any() || product.Reviews.Any())
        {
            return BadRequest("Cannot delete product that is associated with orders or reviews.");
        }
        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
        return NoContent();


    }




}
