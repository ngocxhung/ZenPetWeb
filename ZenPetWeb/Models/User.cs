using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ZenPetWeb.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [StringLength(50)]
        public string Username { get; set; }

        [Required]
        [StringLength(100)]
        public string Password { get; set; }

        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string Email { get; set; }

        [StringLength(100)]
        public string FullName { get; set; }

        [StringLength(20)]
        public string PhoneNumber { get; set; }

        [StringLength(200)]
        public string Address { get; set; }

        [StringLength(20)]
        public string Role { get; set; } = "User";

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public bool Status { get; set; } = true;

        // Navigation properties
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
        public virtual ICollection<BlogPost> BlogPosts { get; set; }
    }
} 