using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCoreApp1.Models;  

namespace AngularCoreApp1.Models
{
    public class Exhibitor : BaseModel
    {
        public string ExhibitorName { get; set; }
        public string Stand { get; set; }
        public string Description { get; set; }
        public string Country { get; set; }
        public virtual UbmEvent UbmEvent { get; set; }
        public virtual IList<Product> Products { get; set; }
    }
}
