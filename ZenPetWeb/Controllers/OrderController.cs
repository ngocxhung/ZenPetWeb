using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZenPetWeb.Data;
using ZenPetWeb.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System;

namespace ZenPetWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // 1. Lấy tất cả Order (kèm User và OrderDetails)
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            var orders = await _context.Orders
                .Include(o => o.User)
                .Include(o => o.OrderDetails)
                .ToListAsync();
            return Ok(orders);
        }

        // 2. Lấy Order theo OrderId
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrderById(int id)
        {
            var order = await _context.Orders
                .Include(o => o.User)
                .Include(o => o.OrderDetails)
                .FirstOrDefaultAsync(o => o.OrderId == id);

            if (order == null)
                return NotFound();

            return Ok(order);
        }

        // 3. Lấy danh sách Orders theo UserId
        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrdersByUser(int userId)
        {
            var orders = await _context.Orders
                .Where(o => o.UserId == userId)
                .Include(o => o.OrderDetails)
                .ToListAsync();

            return Ok(orders);
        }

        // 4. Tạo mới Order
        //[HttpPost("CreateOrder")]
        //public async Task<ActionResult<Order>> CreateOrder(Order order)
        //{
        //    // Mặc định OrderDate và Status nếu chưa có
        //    if (order.OrderDate == null) order.OrderDate = DateTime.UtcNow;
        //    if (string.IsNullOrEmpty(order.Status)) order.Status = "Đang xử lý";

        //    _context.Orders.Add(order);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction(nameof(GetOrderById), new { id = order.OrderId }, order);
        //}

        // 5. Cập nhật trạng thái Order
        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdateOrderStatus(int id, [FromBody] string newStatus)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null) return NotFound();

            order.Status = newStatus;
            await _context.SaveChangesAsync();

            return Ok(order);
        }
    }
}
