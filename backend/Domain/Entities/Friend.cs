using backend.Shared.Core;
using backend.Shared.Enums;

namespace backend.Domain.Entities
{
    public class Friend : BaseEntity
    {
        public RequestStatus status { get; private set; } = RequestStatus.Request;
        public Guid MemberId { get; private set; }
        public Guid WhoId { get; private set; }
        public Member Member { get; private set; } = null!;
        public Member Who { get; private set; } = null!;
    }
}
