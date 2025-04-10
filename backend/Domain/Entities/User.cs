using backend.Shared.Core;
using backend.Shared.Enums;
using System.ComponentModel.DataAnnotations;

namespace backend.Domain.Entities
{
    public class User : BaseEntity
    {
        [EmailAddress]
        public string Email { get; private set; } = default!;
        public string Phone { get; private set; } = default!;
        public string FirstName { get; private set; } = default!;
        public string LastName { get; private set; } = default!;
        public string Patronymic { get; private set; } = default!;
        public string Password { get; private set; } = default!;
        public Role Role { get; private set; } = Role.Member;
    }
}
