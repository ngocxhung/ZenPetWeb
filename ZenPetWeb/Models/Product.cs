using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ZenPetWeb.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        public int Stock { get; set; } = 0;

        [StringLength(50)]
        public string Category { get; set; }

        [StringLength(200)]
        public string ImageUrl { get; set; }

        public bool Status { get; set; } = true;

        // Navigation properties
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
    }
} 