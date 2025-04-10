using backend.Infrastructure.Abstractions;
using Microsoft.EntityFrameworkCore.Storage;
using System.Data.Common;

namespace backend.Infrastructure
{
    internal class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _dbContext;

        public UnitOfWork(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IDbContextTransaction> BeginTransaction(CancellationToken cancellationToken = default)
        {
            IDbContextTransaction transaction = await _dbContext.Database.BeginTransactionAsync(cancellationToken);

            return transaction;
        }

        public async Task SaveChanges(CancellationToken cancellationToken = default)
        {
            await _dbContext.SaveChangesAsync(cancellationToken);
        }
    }
}
