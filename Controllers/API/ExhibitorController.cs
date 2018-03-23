using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCoreApp1.Data;
using Microsoft.AspNetCore.Mvc;

namespace AngularCoreApp1.Controllers.API
{
    [Route("api/Event")]
    public class ExhibitorController : BaseApiController
    {
        protected ExhibitorController(ApplicationDbContext db) : base(db)
        {
        }

//        [HttpGet("{id}")]
//        public JsonResult GetExhibitor(int id)
//        {
//            var existingExhibitor = Db.exh
//            return  new JsonResult()
//        }
    }
}