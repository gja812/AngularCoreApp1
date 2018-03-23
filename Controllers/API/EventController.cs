using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCoreApp1.Data;
using Microsoft.AspNetCore.Mvc;
using AngularCoreApp1.Models;

namespace AngularCoreApp1.Controllers.API
{
    [Route("api/Event")]
    public class EventController : BaseApiController
    {
        public EventController(ApplicationDbContext db) : base(db)
        {
        }

        [HttpGet]
        public JsonResult GetaAllEvents()
        {
            var res = Db.UbmEvents.ToList();

            return new JsonResult(res);
            //return Db.UbmEvents.ToList();
        }

        [HttpGet("{id}")]
        public JsonResult GetEvent(int id)
        {
            var existingEvent = Db.UbmEvents.Find(id);
            return new JsonResult(existingEvent);

            //return new JsonResult(new { id = id, name= "My Event", description= "Event description goes here" });
        }


        // Question: Do I need to be aware of how the event class maps to the post data? What if it doesnt match?
        [HttpPost("add/")]
        public JsonResult PostEvent([FromBody] EventClass dto)
        {
            dto.Venue += " foo";

            UbmEvent newEvent = new UbmEvent();
            newEvent.EventName = dto.EventName;
            newEvent.EventCode = dto.EventCode;
            newEvent.Venue = dto.Venue;
            newEvent.EventStartDate = Convert.ToDateTime(dto.EventStartDate);
            newEvent.EventEndDate = Convert.ToDateTime(dto.EventEndDate);

            Db.UbmEvents.Add(newEvent);
            Db.SaveChanges();

            return new JsonResult(newEvent);
        }



        [HttpPut("edit/{id}", Name = "foo")]
        public JsonResult foobar(int id, [FromBody] EventClass dto) // public async task
        {
            UbmEvent existingEvent = Db.UbmEvents.Find(id); //findasync await

            existingEvent.EventName = dto.EventName;
            existingEvent.EventCode = dto.EventCode;
            existingEvent.Venue = dto.Venue;
            existingEvent.EventStartDate = Convert.ToDateTime(dto.EventStartDate);
            existingEvent.EventEndDate = Convert.ToDateTime(dto.EventEndDate);

            Db.UbmEvents.Update(existingEvent);
            // Db.SaveChanges(); // savechangesasync task maybe  

            return new JsonResult(Db.SaveChanges());
        }


        [HttpDelete("delete/{id}")]
        public JsonResult Delete(int id)
        {
            var existingEvent = Db.UbmEvents.Find(id);
            Db.UbmEvents.Remove(existingEvent);

            return new JsonResult(Db.SaveChanges());
        }
    }

    public class EventClass
    {
        public int Id { get; set; }
        public string EventCode { get; set; }
        public string EventName { get; set; }
        public string Venue { get; set; }
        public string EventStartDate { get; set; }
        public string EventEndDate { get; set; }

    }
}
