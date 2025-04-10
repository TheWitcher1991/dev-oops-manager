﻿using backend.Shared.Core;

namespace backend.Shared.Exeptions
{
    public class FailureException : Exception
    {
        public Error Error { get; }

        public FailureException(Error error)
            : base(error.Message)
        {
            Error = error;
        }
    }
}
