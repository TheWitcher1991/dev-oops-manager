using Microsoft.EntityFrameworkCore.Storage;

namespace backend.Infrastructure.Abstractions
{
    internal interface IUnitOfWork
    {
        Task<IDbContextTransaction> BeginTransaction(CancellationToken cancellationToken = default);
        Task SaveChanges(CancellationToken cancellationToken = default);
    }
}