using MongoDB.Driver;
using WebApi.Models;

namespace WebApi.Helpers
{
    public class DbHelper
    {
        private readonly IMongoDatabase _database;
        private readonly Dictionary<Type, string> _collectionNames;

        public DbHelper(IMongoDatabase database)
        {
            _database = database;
            _collectionNames = new Dictionary<Type, string>()
            {
                { typeof(Product), "products" },
            };
        }

        public IMongoCollection<TDocument> GetCollection<TDocument>()
        //where TDocument: BaseModel
        {
            string collectionName = _collectionNames[typeof(TDocument)];
            return _database.GetCollection<TDocument>(collectionName);
        }
    }
}
