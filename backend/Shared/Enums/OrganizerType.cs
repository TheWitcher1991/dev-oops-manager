using System.ComponentModel;

namespace backend.Shared.Enums
{
    public enum OrganizerType
    {
        [Description("Юридическое лицо")]
        LE = 0,
        [Description("Индивидуальный предприниматель")]
        IE = 1,
        [Description("Частное лицо")]
        PE = 2
    }
}
