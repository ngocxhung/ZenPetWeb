using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZenPetWeb.Models
{
    public class Order
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderId { get; set; }
        public int UserId { get; set; }
        [Required]
        public decimal? TotalAmount { get; set; } // Total amount of the order
        [Required]
        // Status of the order (e.g., Pending, Completed, Cancelled) Pending by default
        public string Status { get; set; } = "Đang xử lý";
        [Required]
        [StringLength(100)]
        public string PaymentMethod { get; set; } // Payment method used for the order
        [Required]
        [StringLength(500)]
        public string ShippingAddress { get; set; } // Shipping address for the order
        [StringLength(500)]
        public string Note { get; set; } // Additional notes for the order, if any
        public DateTime? OrderDate { get; set; } = DateTime.UtcNow; // Date when the order was placed
        // Navigation property to the User who placed the order
        public virtual User User { get; set; }
        // Navigation property to the OrderDetails associated with this order
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }



    }
}
