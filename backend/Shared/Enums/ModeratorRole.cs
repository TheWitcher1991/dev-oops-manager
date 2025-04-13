using System.ComponentModel;

namespace backend.Shared.Enums
{
    public enum ModeratorRole
    {
        [Description("Модератор")]
        Morator = 0,
        [Description("Администратор")]
        Admin = 1,
    }
}
