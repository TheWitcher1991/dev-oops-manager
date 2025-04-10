using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class Organizer : BaseEntity
    {
        public string Name { get; private set; } = string.Empty;
        public Guid UserId { get; private set; }
        public User User { get; private set; } = null!;
    }
}
