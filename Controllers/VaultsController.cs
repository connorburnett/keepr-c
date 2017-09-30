using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    public class VaultsController : Controller
    {
        
        public KeeprContext _db { get; private set; }

        public VaultsController(KeeprContext db)
        {
            _db = db;
        }
        
        // GET api/values
        [HttpGet]
        public IEnumerable<Vault> Get()
        {
            return _db.Vaults;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Vault Get(int id)
        {
            return _db.Vaults.Find(id);
        }

        // POST api/values
        [Authorize]
        [HttpPost]
        public IEnumerable<Vault> Post([FromBody]Vault vault)
        {
            _db.Vaults.Add(vault);
            _db.SaveChanges();
            return _db.Vaults;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Vault vault)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _db.Remove(_db.Vaults.Find(id));
            _db.SaveChanges();
        }
    }
}
