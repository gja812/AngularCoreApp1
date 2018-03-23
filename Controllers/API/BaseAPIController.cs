using AngularCoreApp1.Data;
using Microsoft.AspNetCore.Mvc;

namespace AngularCoreApp1.Controllers.API
{
    [Produces("application/json")]    
    public abstract class BaseApiController : Controller
    {
        protected readonly ApplicationDbContext Db;
        //-- TODO: Uncomment for SignalR support
        //protected readonly IHubContext<Communication.AppHub> Hub;

        protected BaseApiController(ApplicationDbContext db)
        {
            Db = db;
        }

        //-- TODO: Uncomment for SignalR support
        //protected BaseApiController(ApplicationDbContext db, IHubContext<AppHub> hub)
        //{
        //    Db = db;
        //    Hub = hub;
        //}
    }
}