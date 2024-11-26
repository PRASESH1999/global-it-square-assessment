using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Repositories;
using WebApi.DTOs;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductsController : ControllerBase
    {
        private readonly ProductRepository _productRepository;

        public ProductsController(ProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var products = await _productRepository.GetAllAsync();

                if (products == null || !products.Any())
                {
                    return NoContent();
                }

                return Ok(new
                {
                    Products = products
                });
            }
            catch (Exception ex)
            {
                // Log the exception (if necessary)
                return StatusCode(
                    StatusCodes.Status500InternalServerError,
                    new
                    {
                        error = "Internal Server Error",
                        message = "An unexpected error occurred. Please try again later.",
                        details = ex.Message
                    }
                );

            }
        }

        [HttpPost]
        public async Task<IActionResult> Create(ProductDto.ProductCreateInputModel input)
        {
            try
            {
                ProductDto.ProductCreateInputModelValidator validator = new ProductDto.ProductCreateInputModelValidator();
                var validationResult = await validator.ValidateAsync(input);

                if (!validationResult.IsValid)
                {
                    return BadRequest(new
                    {
                        status = 400,
                        error = "Validation Error",
                        message = "One or more validation errors occurred.",
                        errors = validationResult.Errors.Select(e => new
                        {
                            field = e.PropertyName,
                            error = e.ErrorMessage
                        }),
                        timestamp = DateTime.UtcNow
                    });
                }
                var createdProduct = await _productRepository.CreateAsync(input);

                return CreatedAtAction(nameof(GetById), new { id = createdProduct.Id }, createdProduct);
            }
            catch (Exception ex)
            {
                return StatusCode(
                   StatusCodes.Status500InternalServerError,
                   new
                   {
                       error = "Internal Server Error",
                       message = "An unexpected error occurred. Please try again later.",
                       details = ex.Message
                   }
               );
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            try
            {
                var product = await _productRepository.GetByIdAsync(id);
                if (product == null)
                {
                    return NotFound(new { Message = "Product not found." });
                }

                return Ok(product); // 200 OK
            }
            catch (Exception ex)
            {
                // Handle unexpected server errors
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    error = "Internal Server Error",
                    message = "An unexpected error occurred. Please try again later.",
                    details = ex.Message
                });
            }
        }
    }
}
