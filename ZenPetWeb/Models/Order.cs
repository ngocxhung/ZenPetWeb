using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZenPetWeb.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        [Required]
        public int UserId { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.Now;

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal TotalAmount { get; set; }

        [StringLength(20)]
        public string Status { get; set; } = "Pending";

        [StringLength(200)]
        public string ShippingAddress { get; set; }

        [StringLength(50)]
        public string PaymentMethod { get; set; }

        [StringLength(20)]
        public string PaymentStatus { get; set; } = "Pending";

        // Navigation properties
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
} 