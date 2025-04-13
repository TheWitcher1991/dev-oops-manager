using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class OrganizerFavorite : BaseEntity
    {
        public Guid EventId { get; private set; }
        public Guid OrganizerId { get; private set; }
        public Event Event { get; private set; } = null!;
        public Organizer Organizer { get; private set; } = null!;
    }
}
