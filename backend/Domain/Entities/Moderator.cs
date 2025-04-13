using backend.Shared.Core;
using backend.Shared.Enums;

namespace backend.Domain.Entities
{
    public class Moderator : BaseEntity
    {
        public ModeratorRole role { get; private set; } = ModeratorRole.Morator;
        public Guid UserId { get; private set; }
        public User User { get; private set; } = null!;
    }
}
