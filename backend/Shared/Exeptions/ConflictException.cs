using backend.Shared.Core;

namespace backend.Shared.Exeptions
{
    public class ConflictException : Exception
    {
        public Error Error { get; }

        public ConflictException(Error error)
            : base(error.Message)
        {
            Error = error;
        }
    }
}
