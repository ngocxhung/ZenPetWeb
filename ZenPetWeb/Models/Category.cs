using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZenPetWeb.Models
{
    public class Category
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CategoryId { get; set; }

        [Required]
        public string  CategoryName { get; set; } // Added a property to complete the class definition
        [Required]
        public DateTime? CreateAt { get; set; } = DateTime.UtcNow; //Creation time 
        [Required]
        public DateTime? UpdateTime { get; set; } = DateTime.UtcNow; // Last Update Time 
        public virtual ICollection<Product> Products { get; set; }


    }
}