using backend.Shared.Core;
using backend.Shared.Enums;

namespace backend.Domain.Entities
{
    public class Organizer : BaseEntity
    {
        public string Title { get; private set; } = string.Empty;
        public string Description { get; private set; } = string.Empty;
        public string Inn { get; private set; } = string.Empty;
        public string Ogrn { get; private set; } = string.Empty;
        public string Email { get; private set; } = string.Empty;
        public string PhoneNumber { get; private set; } = string.Empty;
        public string Site { get; private set; } = string.Empty;
        public string Address { get; private set; } = string.Empty;
        public string Photo { get; private set; } = string.Empty;
        public bool Accredited { get; private set; } = false;
        public OrganizerType type { get; private set; } = OrganizerType.LE;
        public Guid UserId { get; private set; }
        public User User { get; private set; } = null!;
    }
}
