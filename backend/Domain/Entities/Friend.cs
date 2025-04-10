using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class Friend : BaseEntity
    {
        public Guid MemberId { get; private set; }
        public Member Member { get; private set; } = null!;
    }
}
