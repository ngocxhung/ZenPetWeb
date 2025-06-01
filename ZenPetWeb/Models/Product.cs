using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZenPetWeb.Models
{
    public class Product
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductId { get; set; }
        [Required]
        [StringLength(100)]
        public string ProductName { get; set; }
        [Required]
        [StringLength(500)]
        public string Description { get; set; }
        [Required]
        [DataType(DataType.Currency)]
        public decimal? Price { get; set; }
        [Required]
        public int Stock { get; set; } // Available stock quantity
        [Required]
        public int? CategoryId { get; set; } // Foreign key to Category
        [Required]
        [StringLength(500)]
        public string ImageUrl { get; set; } // URL to the product image
        [Required]
        public bool IsActive { get; set; } = true; // Indicates if the product is active 
        public decimal? Rating { get; set; } = 0; // Average rating of the product
        public decimal? Discount { get; set; } = 0; // Discount percentage on the product
        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Creation timestamp
        [Required]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow; // Last update timestamp
        public virtual Category Category { get; set; } // Navigation property to Category
        public virtual ICollection<OrderDetail> OrderDetails { get; set; } // Navigation property to Orders containing this product
        public virtual ICollection<Review> Reviews { get; set; } // Navigation property to Reviews for this product


    }
}
