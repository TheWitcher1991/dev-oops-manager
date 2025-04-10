using backend.Domain.Entities;

namespace backend.Shared.Core.Abstractions
{
    public interface IJwtProvider
    {
        Guid Decode(string token);
        string Sign(User user);
    }
}