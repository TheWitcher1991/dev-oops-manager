using backend.Shared.Core.Abstractions;

namespace backend.Shared.Core
{
    public abstract class BaseEntity : IBaseEntity
    {
        public Guid Id { get; set; }
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
