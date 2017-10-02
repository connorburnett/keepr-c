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

        // [HttpGet]
        // public IEnumerable<Vault> Get()
        // {
        //     return _db.Vaults;
        // }

        // GET api/values/5
        [HttpGet("{id}")]
        public Vault Get(int id)
        {
            return _db.Vaults.Find(id);
        }

        [HttpGet("{userId}/vaults")]
        public IEnumerable<Vault> GetVaults(string userId)
        {
            return _db.Vaults.Where(v => v.UserId == userId);
        }

        [HttpGet("{userId}/vaults/{vaultId}")]
        public IEnumerable<Keep> GetVault(string userId, int vaultId)
        {
            return _db.Vaults.Find(vaultId).VaultKeeps;
        }

        // POST api/values
        //[Authorize]
        [HttpPost]
        public IEnumerable<Vault> Post([FromBody]Vault vault)
        {
            _db.Vaults.Add(vault);
            _db.SaveChanges();
            return _db.Vaults;
        }

        [HttpPost("{vaultId}/addkeep/{keepId}")]
        public IEnumerable<Keep> AddKeep(int vaultId, int keepId)
        {
            // var keep = _db.Keeps.Single(k => k.Id == keepId);
            // var vault = _db.Vaults.Single(v => v.Id == vaultId);
            var keep = _db.Keeps.Find(keepId);
            var vault = _db.Vaults.Find(vaultId);
            if (keep != null && vault != null)
            {
                // _db.Vaults.Find(vault).VaultKeeps.Add(keep);
                vault.VaultKeeps.Add(_db.Keeps.Find(keepId));
                _db.SaveChanges();
                return _db.Vaults.Single(v => v.Id == vaultId).VaultKeeps;
            }
            return _db.Vaults.Single(v => v.Id == vaultId).VaultKeeps;
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
            Vault vault = _db.Vaults.Find(id);
            _db.Remove(_db.Vaults.Find(id));
            _db.SaveChanges();
        }
    }
}
