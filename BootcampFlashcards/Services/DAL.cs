using BootcampFlashcards.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Dapper.Contrib.Extensions;

namespace BootcampFlashcards.Services
{
    public class DAL : IDAL
    {
        IDbConnection db;

        public DAL(IConfiguration config)
        {
            db = new SqlConnection(config.GetConnectionString("DbServer"));
        }

        public object AddFavorite(string username, long id)
        {
            IEnumerable<Favorite> currentFavorites = GetFavorites(username);
            if(currentFavorites.Any(fav => fav.questionID == id))
            {
                return new { result = false, reason = "User has already favorited this." };
            }
            db.Insert<Favorite>(new Favorite() { username = username, questionID = id });
            return new { result = true };
        }

        public object AddQuestion(FlashCard card)
        {
            db.Insert<FlashCard>(card);
            return new { result = true };
        }

        public IEnumerable<Favorite> GetFavorites(string username)
        {
            IEnumerable<Favorite> favorite = db.GetAll<Favorite>().Where(fav => fav.username == username);
            return favorite;
        }

        public FlashCard GetQuestion(long id)
        {
            return db.Get<FlashCard>(id);
        }

        public IEnumerable<FlashCard> GetQuestions()
        {
            return db.GetAll<FlashCard>();
        }

        public object RemoveFavorite(string username, long id)
        {
            IEnumerable<Favorite> favorites = GetFavorites(username);
            if(favorites.Any(fav => fav.questionID == id))
            {
                long favID = favorites.Where(fav => fav.questionID == id).First().id;
                db.Delete<Favorite>(new Favorite() { id = favID });
                return new { result = true };
            }
            return new { result = false, reason = "This favorite is no longer available." };
        }

        public object RemoveQuestion(long id)
        {
            db.Delete<FlashCard>(new FlashCard() { id = id });
            return new { result = true };
        }        
    }
}
