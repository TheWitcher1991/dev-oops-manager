namespace backend.Shared.Core.Abstractions
{
    public interface IBaseModel
    {
        DateTime CreatedAt { get; }
        Guid Id { get; }
        DateTime UpdatedAt { get; }
    }
}