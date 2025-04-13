using System.ComponentModel;

namespace backend.Shared.Enums
{
    public enum Spec
    {
        [Description("Конференция")]
        Conference = 0,
        [Description("Выставка")]
        Exhibition = 1,
        [Description("Совернование")]
        Competition = 2,
        [Description("Акселератор")]
        Accelerator = 3,
        [Description("Встреча")]
        Meeting = 4,
        [Description("Лекция")]
        Lecture = 5,
        [Description("Митап")]
        Mitap = 6,
        [Description("Опрос")]
        Survey = 7,
        [Description("Семинар")]
        Seminar = 8,
        [Description("Форум")]
        Forum = 9,
        [Description("Хакатон")]
        Hackathon = 10
    }
}
