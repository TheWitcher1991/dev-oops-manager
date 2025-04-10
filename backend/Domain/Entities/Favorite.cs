using backend.Shared.Enums;

namespace backend.Domain.Entities
{
    public class Favorite
    {
        public FavoriteObject Object { get; private set; }
        public Guid ObjectId { get; private set; }
        public Guid MemberId { get; private set; }
        public Member Member { get; private set; } = null!;
    }
}
