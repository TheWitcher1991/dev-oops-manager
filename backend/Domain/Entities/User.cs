using backend.Shared.Enums;
using Microsoft.AspNetCore.Identity;

namespace backend.Domain.Entities
{
    public class User : IdentityUser<Guid>
    {
        public string FirstName { get; private set; } = default!;
        public string LastName { get; private set; } = default!;
        public string Patronymic { get; private set; } = default!;
        public string Password { get; private set; } = default!;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public Role Role { get; private set; } = Role.Member;
    }
}
