using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class Member : BaseEntity
    {
        public bool Friend { get; set; } = true;
        public bool Invite { get; set; } = true;
        public bool History { get; set; } = true;
        public Guid UserId { get; private set; }
        public User User { get; private set; } = null!;
    }
}
