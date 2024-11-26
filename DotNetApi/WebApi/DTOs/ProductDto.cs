using MongoDB.Bson.Serialization.IdGenerators;
using FluentValidation;
using FluentValidation.Results;

namespace WebApi.DTOs
{
    public class ProductDto
    {
        public class BaseInputModel
        {
            public string Name {  get; set; }
            public double Price {  get; set; }
            public string Description {  get; set; }
            public string Category {  get; set; }
        }

        public class ProductCreateInputModel : BaseInputModel{ }
        
        public class ProductUpdateInputModel : BaseInputModel{ }

        public class ProductCreateInputModelValidator : AbstractValidator<ProductCreateInputModel>
        {
            public ProductCreateInputModelValidator()
            {
                RuleFor(x => x.Name)
                    .NotEmpty().WithMessage("Name is required.")
                    .Length(3, 100).WithMessage("Name must be between 3 and 100 characters.");

                RuleFor(x => x.Price)
                    .GreaterThan(0).WithMessage("Price must be greater than zero.");

                RuleFor(x => x.Description)
                    .NotEmpty().WithMessage("Description is required.")
                    .Length(5, 500).WithMessage("Description must be between 5 and 500 characters.");

                RuleFor(x => x.Category)
                    .NotEmpty().WithMessage("Category is required.")
                    .Length(3, 50).WithMessage("Category must be between 3 and 50 characters.");
            }
        }

        public class ProductUpdateInputModelValidator : AbstractValidator<ProductUpdateInputModel>
        {
            public ProductUpdateInputModelValidator()
            {
                RuleFor(x => x.Name)
                    .NotEmpty().WithMessage("Name is required.")
                    .Length(3, 100).WithMessage("Name must be between 3 and 100 characters.");

                RuleFor(x => x.Price)
                    .GreaterThan(0).WithMessage("Price must be greater than zero.");

                RuleFor(x => x.Description)
                    .NotEmpty().WithMessage("Description is required.")
                    .Length(5, 500).WithMessage("Description must be between 5 and 500 characters.");

                RuleFor(x => x.Category)
                    .NotEmpty().WithMessage("Category is required.")
                    .Length(3, 50).WithMessage("Category must be between 3 and 50 characters.");
            }
        }
    }
}
