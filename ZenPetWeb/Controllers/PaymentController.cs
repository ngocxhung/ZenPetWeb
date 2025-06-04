using Microsoft.AspNetCore.Mvc;
using ZenPetWeb.Data;
using ZenPetWeb.Models;

namespace ZenPetWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PaymentController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("card")]
        public IActionResult PayByCard([FromBody] CardPaymentRequest request)
        {
            var order = _context.Orders.FirstOrDefault(o => o.OrderId == request.OrderId);

            if (order == null)
                return NotFound(new { message = "Đơn hàng không tồn tại." });

            if (order.Status == "Hoàn thành" || order.Status == "Đã thanh toán")
                return BadRequest(new { message = "Đơn hàng đã được thanh toán." });

            // Giả lập xử lý thẻ (ở đây chỉ kiểm tra đơn giản)
            if (string.IsNullOrWhiteSpace(request.CardNumber) ||
                string.IsNullOrWhiteSpace(request.CardHolder) ||
                string.IsNullOrWhiteSpace(request.Expiry) ||
                string.IsNullOrWhiteSpace(request.Cvv))
            {
                return BadRequest(new { message = "Thông tin thẻ không hợp lệ." });
            }

            // ✅ Giả lập thanh toán thành công
            order.Status = "Đã thanh toán";
            order.PaymentMethod = "Thẻ tín dụng";
            _context.Orders.Update(order);
            _context.SaveChanges();

            return Ok(new
            {
                message = "Thanh toán thành công!",
                orderId = order.OrderId,
                status = order.Status
            });
        }
        [HttpPost("cash")]
        public IActionResult PayByCash([FromBody] int orderId)
        {
            var order = _context.Orders.FirstOrDefault(o => o.OrderId == orderId);

            if (order == null)
                return NotFound(new { message = "Đơn hàng không tồn tại." });

            if (order.Status == "Hoàn thành" || order.Status == "Đã thanh toán")
                return BadRequest(new { message = "Đơn hàng đã được thanh toán." });

            // ✅ Cập nhật trạng thái thanh toán
            order.Status = "Đã thanh toán";
            order.PaymentMethod = "Tiền mặt";
            _context.Orders.Update(order);
            _context.SaveChanges();

            return Ok(new
            {
                message = "Thanh toán tiền mặt thành công!",
                orderId = order.OrderId,
                status = order.Status
            });
        }

    }
}
