using _4financeTMS.Models;
using Microsoft.EntityFrameworkCore;

namespace _4financeTMS.Data
{
    public class TMSDbContext :DbContext
    {
        public TMSDbContext(DbContextOptions<TMSDbContext> options) : base(options)
        {
                
        }


        // if table doesnt  exist it creates it
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
    }

}
