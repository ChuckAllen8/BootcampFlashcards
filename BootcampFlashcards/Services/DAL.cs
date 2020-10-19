using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BootcampFlashcards.Services
{
    public class DAL : IDAL
    {
        IDbConnection db;

        public DAL(IConfiguration config)
        {
            db = new SqlConnection(config.GetConnectionString("DbServer"));
        }


    }
}
