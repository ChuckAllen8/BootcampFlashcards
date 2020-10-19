using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BootcampFlashcards.Models
{
    public class FlashCard
    {
        [Key]
        public long id { get; set; }
        public string question { get; set; }
        public string answer { get; set; }


    }
}
