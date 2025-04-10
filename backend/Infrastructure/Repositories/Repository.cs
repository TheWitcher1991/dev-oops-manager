using backend.Infrastructure.Abstractions;
using backend.Shared.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System.Diagnostics;
using System.Linq.Expressions;

namespace backend.Infrastructure.Repositories
{
    [DebuggerStepThrough]
    internal class Repository<T> : IRepository<T> where T : BaseEntity
    {
        protected readonly DbContext _dbContext;
        protected readonly DbSet<T> _dbSet;

        public Repository(DbContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = _dbContext.Set<T>();
        }

        public async Task<IDbContextTransaction> BeginTransactionAsync(
            CancellationToken cancellationToken = default)
        {
            IDbContextTransaction dbContextTransaction = await _dbContext.Database.BeginTransactionAsync(cancellationToken);
            return dbContextTransaction;
        }

        public async Task<T?> GetByIdAsync(Guid id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task<List<T>> FilterAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.Where(predicate).ToListAsync();
        }

        public async Task<List<T>> ExcludeAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.Where(x => !predicate.Compile().Invoke(x)).ToListAsync();
        }

        public async Task<List<T>> ListAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> AddAsync(T entity)
        {
            var entry = await _dbSet.AddAsync(entity);
            return entry.Entity;
        }

        public Task UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            return Task.CompletedTask;
        }

        public Task DeleteAsync(T entity)
        {
            _dbSet.Remove(entity);
            return Task.CompletedTask;
        }

        public Task SaveChangesAsync()
        {
            return _dbContext.SaveChangesAsync();
        }
    }
}
