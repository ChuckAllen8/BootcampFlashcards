using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BootcampFlashcards.Models;
using BootcampFlashcards.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BootcampFlashcards.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlashCardsController : ControllerBase
    {
        private IDAL data; 
        public FlashCardsController(IDAL dal) {
            data = dal;        
        }
        [HttpGet] //api/Flashcards
        public IEnumerable<FlashCard> GetAll()
        {
            return data.GetQuestions();
        }
        [HttpPost]
        public Object AddQuestion(FlashCard card)
        {
            return data.AddQuestion(card);
        }




    }
}
