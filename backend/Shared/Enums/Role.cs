using System.ComponentModel;

namespace backend.Shared.Enums
{
    public enum Role
    {
        [Description("Организатор")]
        Organizer = 1,
        [Description("Участник")]
        Member = 2,
        [Description("Модератор")]
        Moderator = 3
    }
}
