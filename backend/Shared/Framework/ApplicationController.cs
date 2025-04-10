using backend.Shared.Core;
using Microsoft.AspNetCore.Mvc;

namespace backend.Shared.Framework
{
    [ApiController]
    [Route("[controller]")]
    public abstract class ApplicationController : ControllerBase
    {
        public override OkObjectResult Ok(object? value)
        {
            var envelope = Envelope.Ok(value);

            return base.Ok(envelope);
        }
    }
}
