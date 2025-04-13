using backend.Shared.Core;
using backend.Shared.Enums;

namespace backend.Domain.Entities
{
    public class EventModeration : BaseEntity
    {
        public string Reason { get; private set; } = string.Empty;
        public ModerationStatus status { get; private set; } = ModerationStatus.Rejected;
        public Guid EventId { get; private set; }
        public Guid ModeratorId { get; private set; }
        public Event Event { get; private set; } = null!;
        public Moderator Moderator { get; private set; } = null!;
    }
}
