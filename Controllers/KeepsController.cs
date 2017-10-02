using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using keepr.Models;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    public class KeepsController : Controller
    {
        public KeeprContext _db { get; private set; }

        public KeepsController(KeeprContext db)
        {
            _db = db;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Keep> Get()
        {
            return _db.Keeps;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Keep Get(int id)
        {
            return _db.Keeps.Find(id);
        }

        // POST api/values
        //[Authorize]
        [HttpPost]
        public IEnumerable<Keep> Post([FromBody]Keep keep)
        {
            _db.Keeps.Add(keep);
            _db.SaveChanges();
            return _db.Keeps;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Keep keep)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _db.Remove(_db.Keeps.Find(id));
            _db.SaveChanges();
        }
    }
}
