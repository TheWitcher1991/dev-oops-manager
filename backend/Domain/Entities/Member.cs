using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class Member : BaseEntity
    {
        public string Photo { get; private set; } = string.Empty;
        public bool Friend { get; private set; } = true;
        public bool Invite { get; private set; } = true;
        public bool History { get; private set; } = true;
        public Guid UserId { get; private set; }
        public User User { get; private set; } = null!;
    }
}
