﻿using backend.Shared.Core;
using backend.Shared.Exeptions;
using System.Security.Authentication;

namespace backend.Api.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private async Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            _logger.LogError(exception, exception.Message);

            (int statusCode, Error error) = exception switch
            {
                NotFoundException ex => (StatusCodes.Status404NotFound, ex.Error),

                ValidationException ex => (StatusCodes.Status400BadRequest, ex.Error),

                ConflictException ex => (StatusCodes.Status409Conflict, ex.Error),

                FailureException ex => (StatusCodes.Status500InternalServerError, ex.Error),

                AuthenticationException => (StatusCodes.Status401Unauthorized,
                    Error.Failure("authentication.failed", exception.Message)),

                _ => (StatusCodes.Status500InternalServerError,
                    Error.Failure("server.internal", exception.Message))
            };

            var envelope = Envelope.Error(error);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = statusCode;

            await context.Response.WriteAsJsonAsync(envelope);
        }
    }

    public static class ExceptionMiddlewareExtensions
    {
        public static IApplicationBuilder UseExceptionMiddleware(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ExceptionMiddleware>();
        }
    }
}
