using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class EventMember : BaseEntity
    {
        public bool Comming { get; private set; } = true;
        public Guid EventId { get; private set; }
        public Guid MemberId { get; private set; }
        public Event Event { get; private set; } = null!;
        public Member Member { get; private set; } = null!;
    }
}
