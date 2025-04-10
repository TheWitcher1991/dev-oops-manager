namespace backend.Domain.Entities
{
    public class OrganizerFavorite
    {
        public bool Comming { get; private set; } = true;
        public Guid EventId { get; private set; }
        public Guid OrganizerId { get; private set; }
        public Event Event { get; private set; } = null!;
        public Organizer Organizer { get; private set; } = null!;
    }
}
