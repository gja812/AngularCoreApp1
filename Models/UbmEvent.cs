using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreApp1.Models
{
    public class UbmEvent : BaseModel
    {
        public string EventName { get; set; }
        public string EventCode { get; set; }
        public DateTime EventStartDate { get; set; }
        public DateTime EventEndDate { get; set; }
        public string Venue { get; set; }
        public IList<Exhibitor> Exhibitors { get; set; }
    }
}
