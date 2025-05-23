using backend.Shared.Core;

namespace backend.Domain.Entities
{
    public class Category : BaseEntity
    {
        public string Title { get; private set; } = string.Empty;
    }
}
