using System;
using AngularCoreApp1.Data;
using Microsoft.AspNetCore.Mvc;

namespace AngularCoreApp1.Controllers.API
{
    [Produces("application/json")]
    [Route("api/Now")]
    public class NowController : BaseApiController
    {
        [HttpGet]
        public DateTime GetNow()
        {
            return DateTime.Now;
        }

        public NowController(ApplicationDbContext db) : base(db)
        {
        }

        //-- TODO: Uncomment for SignalR support        
        //public NowController(ApplicationDbContext db, IHubContext<Communication.AppHub> hub) : base(db, hub)
        //{
        //}
    }
}