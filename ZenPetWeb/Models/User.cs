using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZenPetWeb.Models
{
    public class User
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required]
        [StringLength(100)]
        public string UserName { get; set; }
        [Required]
        [StringLength(100)]
        public string FullName { get; set; }
        [Required]
        [StringLength(100)]
        public string Password { get; set; }
        [Required]
        [StringLength(100)]
        public string Email { get; set; }
        [Required]
        [StringLength(15)]
        public string PhoneNumber { get; set; }
        [Required]
        [StringLength(100)]
        public string Address { get; set; }
        [Required]
        [StringLength(50)]
        public string Role { get; set; } // e.g., "Admin", "User", "Veterinarian"
        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        [Required]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        [StringLength(500)]
        public string? ProfilePictureUrl { get; set; } // URL to the user's profile picture
        // Navigation property to Orders placed by the user
        public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
        // Navigation property to Reviews written by the user
        public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
    }
}
