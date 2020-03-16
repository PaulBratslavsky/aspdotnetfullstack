using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Value>  Values { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) 
        {
            builder.Entity<Value>()
                .HasData(
                    new Value { Id = 1, Name = "First Value"},
                    new Value { Id = 2, Name = "Second Value"},
                    new Value { Id = 3, Name = "Third Value"},
                    new Value { Id = 4, Name = "Fourth Value"}
                );
        }
    }
}
