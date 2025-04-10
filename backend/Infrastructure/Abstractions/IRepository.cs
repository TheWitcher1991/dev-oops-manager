using backend.Shared.Core;
using Microsoft.EntityFrameworkCore.Storage;
using System.Linq.Expressions;

namespace backend.Infrastructure.Abstractions
{
    internal interface IRepository<T> where T : BaseEntity
    {
        Task<T> AddAsync(T entity);
        Task<IDbContextTransaction> BeginTransactionAsync(CancellationToken cancellationToken = default);
        Task DeleteAsync(T entity);
        Task<List<T>> ExcludeAsync(Expression<Func<T, bool>> predicate);
        Task<List<T>> FilterAsync(Expression<Func<T, bool>> predicate);
        Task<T?> GetByIdAsync(Guid id);
        Task<List<T>> ListAsync();
        Task SaveChangesAsync();
        Task UpdateAsync(T entity);
    }
}