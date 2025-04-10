namespace backend.Shared.Core.Abstractions
{
    public interface IFileService
    {
        Task<string> SaveFileAsync(IFormFile file);
    }
}