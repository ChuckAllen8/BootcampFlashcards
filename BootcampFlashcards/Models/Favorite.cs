using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BootcampFlashcards.Models
{
    public class Favorite
    {
        [Key]
        public long id { get; set; }
        public string username { get; set; }
        public long questionID { get; set; }

    }
}
