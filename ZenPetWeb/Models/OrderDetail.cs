using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZenPetWeb.Models
{
    public class OrderDetail
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderDetailId { get; set; } // Unique identifier for the order detail
        [Required]
        public int OrderId { get; set; } // Foreign key to the Order
        [Required]
        public int ProductId { get; set; } // Foreign key to the Product
        [Required]
        public int Quantity { get; set; } // Quantity of the product in the order
        [Required]
        [DataType(DataType.Currency)]
        public decimal Price { get; set; } // Price of the product at the time of order
        public decimal? Discount { get; set; } = 0; // Discount applied to the product, if any
        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Creation timestamp
        // Navigation property to the Order
        public virtual Order Order { get; set; }
        // Navigation property to the Product
        public virtual Product Product { get; set; }
    }
}