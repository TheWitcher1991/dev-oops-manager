using backend.Shared.Core;
using backend.Shared.Enums;

namespace backend.Domain.Entities
{
    public class Invite : BaseEntity
    {
        public RequestStatus status { get; private set; } = RequestStatus.Request;
        public Guid MemberId { get; private set; }
        public Guid RecipientId { get; private set; }
        public Member Member { get; private set; } = null!;
        public Member Recipient { get; private set; } = null!;
    }
}
