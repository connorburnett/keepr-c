using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Vault
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        
        [Required]
        public string UserId { get; set; }
    }
}