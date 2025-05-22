using backend.Shared.Core;
using backend.Shared.Enums;

namespace backend.Domain.Entities
{
    public class Event : BaseEntity
    {
        public string Title { get; private set; } = string.Empty;
        public string Description { get; private set; } = string.Empty;
        public string Resources { get; private set; } = string.Empty;
        public string Photo { get; private set; } = string.Empty;
        public int TeamMax { get; private set; }
        public int TeamMin { get; private set; } = 1;
        public DateTime DateStart { get; private set; }
        public DateTime DateEnd { get; private set; }
        public Format Format { get; private set; } = Format.Offline;
        public Spec Spec { get; private set; } = Spec.Conference;
        public Guid OrganizerId { get; private set; }
        public Organizer Organizer { get; private set; } = null!;
        public List<Tag> Tags { get; private set; } = new List<Tag>();
    }
}
