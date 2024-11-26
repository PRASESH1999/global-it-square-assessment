using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Reflection;

namespace WebApi.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            var assembly = Assembly.GetExecutingAssembly(); // Get the current assembly
            var repositoryTypes = assembly.GetTypes()
                .Where(t => t.IsClass && !t.IsAbstract &&
                            t.Namespace != null &&
                            t.Namespace.EndsWith("Repository")); // Assuming your namespace ends with "Repository"

            foreach (var repoType in repositoryTypes)
            {
                services.AddScoped(repoType); // Register each repository as Scoped
            }
        }
    }
}
