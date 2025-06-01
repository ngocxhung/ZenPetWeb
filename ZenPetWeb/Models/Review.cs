using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZenPetWeb.Models
{
    public class Review
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ReviewId { get; set; } // Unique identifier for the review
        [Required]
        public int ProductId { get; set; } // Foreign key to the Product being reviewed
        [Required]
        public int UserId { get; set; } // Foreign key to the User who wrote the review
        [Required]
        [Range(1, 5)]
        public decimal? Rating { get; set; } // Rating given by the user (1 to 5 stars)
        [StringLength(1000)]
        public string? Comment { get; set; } // Optional comment provided by the user
        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Creation timestamp
        // Navigation property to the Product being reviewed
        public virtual Product Product { get; set; }
        // Navigation property to the User who wrote the review
        public virtual User User { get; set; }


    }
}