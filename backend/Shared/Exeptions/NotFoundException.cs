﻿using backend.Shared.Core;

namespace backend.Shared.Exeptions
{
    public class NotFoundException : Exception
    {
        public Error Error { get; }

        public NotFoundException(Error error)
            : base(error.Message)
        {
            Error = error;
        }
    }
}
