using MongoDB.Bson;
using MongoDB.Driver;
using WebApi.Helpers;
using WebApi.Models;
using static WebApi.DTOs.ProductDto;

namespace WebApi.Repositories
{
    public class ProductRepository
    {
        private readonly DbHelper _dbHelper;
        private readonly IMongoCollection<Product> _productCollection;

        public ProductRepository(DbHelper dbHelper)
        {
            _dbHelper = dbHelper;
            _productCollection = _dbHelper.GetCollection<Product>();
        }

        public async Task<List<Product>> GetAllAsync()
        {
            return await _productCollection.Find(Builders<Product>.Filter.Empty).ToListAsync();
        }

        public async Task<Product> GetByIdAsync(string id)
        {
            if (!ObjectId.TryParse(id,out _))
            {
                return default;
            }
            return await _productCollection
                .Find(Builders<Product>.Filter.Eq(x => x.Id, id))
                .FirstOrDefaultAsync();
        }

        public async Task<Product> CreateAsync(ProductCreateInputModel input)
        {
            Product product = new Product { 
                Name = input.Name,
                Price = input.Price,
                Description = input.Description,
                Category = input.Category,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
            };
            await _productCollection.InsertOneAsync(product);
            return product;
        }
    }
}
