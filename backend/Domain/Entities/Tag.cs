using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class Tag : BaseEntity
    {
        public string Name { get; private set; } = string.Empty;
    }
}
