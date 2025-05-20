using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZenPetWeb.Models
{
    public class BlogPost
    {
        [Key]
        public int PostId { get; set; }

        [Required]
        [StringLength(200)]
        public string Title { get; set; }

        public string Content { get; set; }

        [Required]
        public int AuthorId { get; set; }

        [StringLength(200)]
        public string ImageUrl { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public bool Status { get; set; } = true;

        // Navigation properties
        [ForeignKey("AuthorId")]
        public virtual User Author { get; set; }
    }
} 