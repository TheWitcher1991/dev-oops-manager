using System.ComponentModel;

namespace backend.Shared.Enums
{
    public enum RequestStatus
    {
        [Description("Принят")]
        Accepted = 0,
        [Description("Отклонен")]
        Rejected = 1,
        [Description("Ожидание")]
        Pending = 2,
    }
}
