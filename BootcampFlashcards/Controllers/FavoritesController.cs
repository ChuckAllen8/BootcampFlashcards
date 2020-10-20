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
    public class FavoritesController : ControllerBase
    {
        private IDAL data;
        public FavoritesController(IDAL dal)
        {
            data = dal;
        }
        [HttpGet("{username}")]
        public IEnumerable<FlashCard> GetFavs(string username)
        {
            List<Favorite> favs =  data.GetFavorites(username).ToList();

            List<FlashCard> results = new List<FlashCard>();

            foreach (Favorite item in favs)
            {
                results.Add(data.GetQuestion(item.questionID));
            
            }
            return results;
        }

        [HttpPost]
        public Object AddFav(Favorite fav)
        {
            return data.AddFavorite(fav.username, fav.questionID);
        }

        [HttpDelete("{username}/{questionID}")]
        public Object RemoveFav(string username, long questionID)
        {
            return data.RemoveFavorite(username, questionID);
        }




    }
    
}
