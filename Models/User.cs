using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace keepr.Models
{
    public class User : IdentityUser
    {
        
        public string ProfileImgUrl { get; set; }
        public List<Keep> MyKeeps { get; set; } = new List<Keep>();
        public List<Vault> UserVaults {get; set; } = new List<Vault>();
    }
}