using backend.Shared.Authentication;
using System.Security.Authentication;

namespace backend.Api.Middlewares
{
    public class UserScopedDataMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<UserScopedDataMiddleware> _logger;

        public UserScopedDataMiddleware(
            RequestDelegate next,
            ILogger<UserScopedDataMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context, UserScope userScope)
        {
            if (context.User.Identity is not null && context.User.Identity.IsAuthenticated)
            {
                string userIdClaim = context.User.Claims.FirstOrDefault(c => c.Type == CustomClaims.ID)!.Value;

                if (!Guid.TryParse(userIdClaim, out var userId))
                    throw new AuthenticationException("The user id claim is not in a valid format.");

                if (userScope.UserId == userId)
                {
                    await _next(context);
                    return;
                }

                userScope.UserId = userId;
            }

            await _next(context);
        }
    }

    public static class AuthorizationMiddlewareExtensions
    {
        public static IApplicationBuilder UseScopeDataMiddleware(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<UserScopedDataMiddleware>();
        }
    }
}
