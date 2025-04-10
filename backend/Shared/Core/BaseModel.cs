using backend.Shared.Core.Abstractions;

namespace backend.Shared.Core
{
    public abstract class BaseModel : IBaseModel
    {
        public Guid Id { get; }
        public DateTime UpdatedAt { get; } = DateTime.UtcNow;
        public DateTime CreatedAt { get; } = DateTime.UtcNow;  
    }
}
