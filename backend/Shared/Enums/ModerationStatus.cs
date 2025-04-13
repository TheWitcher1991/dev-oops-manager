using System.ComponentModel;

namespace backend.Shared.Enums
{
    public enum ModerationStatus
    {
        [Description("Одобрено")]
        Approved = 0,
        [Description("Отклонено")]
        Rejected = 1,
        [Description("Отредактировано")]
        Edited = 2,
    }
}
