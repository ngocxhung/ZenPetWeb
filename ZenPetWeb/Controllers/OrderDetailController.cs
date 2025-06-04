using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZenPetWeb.Data;
using ZenPetWeb.Models;

namespace ZenPetWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrderDetailController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/OrderDetail/GetAll
        [HttpGet("GetAll")]
        public async Task<ActionResult<IEnumerable<OrderDetail>>> GetAllOrderDetails()
        {
            return await _context.OrderDetails
                .Include(od => od.Product)
                .Include(od => od.Order)
                .ToListAsync();
        }

        // GET: api/OrderDetail/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderDetail>> GetOrderDetailById(int id)
        {
            var orderDetail = await _context.OrderDetails
                .Include(od => od.Product)
                .Include(od => od.Order)
                .FirstOrDefaultAsync(od => od.OrderDetailId == id);

            if (orderDetail == null)
            {
                return NotFound();
            }

            return orderDetail;
        }

        //// POST: api/OrderDetail/Create
        //[HttpPost("Create")]
        //public async Task<ActionResult<OrderDetail>> CreateOrderDetail(OrderDetail orderDetail)
        //{
        //    _context.OrderDetails.Add(orderDetail);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction(nameof(GetOrderDetailById), new { id = orderDetail.OrderDetailId }, orderDetail);
        //}

        // PUT: api/OrderDetail/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrderDetail(int id, OrderDetail updatedOrderDetail)
        {
            if (id != updatedOrderDetail.OrderDetailId)
            {
                return BadRequest();
            }

            _context.Entry(updatedOrderDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.OrderDetails.Any(e => e.OrderDetailId == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/OrderDetail/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderDetail(int id)
        {
            var orderDetail = await _context.OrderDetails.FindAsync(id);
            if (orderDetail == null)
            {
                return NotFound();
            }

            _context.OrderDetails.Remove(orderDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
