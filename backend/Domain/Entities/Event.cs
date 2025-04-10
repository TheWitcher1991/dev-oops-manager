using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class Event : BaseEntity
    {
        public Guid OrganizerId { get; private set; }
        public Organizer Organizer { get; private set; } = null!;
    }
}
