namespace backend.Shared.Core.Abstractions
{
    public interface IBaseEntity
    {
        DateTime CreatedAt { get; set; }
        Guid Id { get; set; }
        DateTime UpdatedAt { get; set; }
    }
}