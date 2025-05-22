using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class Tag : BaseEntity
    {
        public string Title { get; private set; } = string.Empty;
    }
}
