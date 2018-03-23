using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreApp1.Models
{
    public class Product : BaseModel
    {
        public int ExhibitorId { get; set; }
        public virtual Exhibitor Exhibitor { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
    }
}
