using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BootcampFlashcards.Models;

namespace BootcampFlashcards.Services
{
    public interface IDAL
    {
        IEnumerable<FlashCard> GetQuestions();
        Object AddQuestion(FlashCard card);
        Object RemoveQuestion(long id);
        FlashCard GetQuestion(long id);
        IEnumerable<Favorite> GetFavorites(string username);
        Object AddFavorite(string username, long id);
        Object RemoveFavorite(string username, long id);
    }
}
