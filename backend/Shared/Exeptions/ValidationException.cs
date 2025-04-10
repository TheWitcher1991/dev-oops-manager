﻿using backend.Shared.Core;

namespace backend.Shared.Exeptions
{
    public class ValidationException : Exception
    {
        public Error Error { get; }

        public ValidationException(Error error)
            : base(error.Message)
        {
            Error = error;
        }
    }
}
