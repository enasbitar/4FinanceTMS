using _4financeTMS.Data;
using _4financeTMS.Models;
using Microsoft.EntityFrameworkCore;

namespace _4financeTMS.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private readonly TMSDbContext _TMSDbContext;
        public CourseRepository(TMSDbContext tMSDbContext)
        {
            this._TMSDbContext = tMSDbContext;
        }

        public async Task<Course> CreateCourseAsync(Course course)
        {
            course.Id = new int();
            await _TMSDbContext.Courses.AddAsync(course);
            await _TMSDbContext.SaveChangesAsync();
            return course;
        }

        public async Task<Course> DeleteCourseAsync(int id)
        {
            var course =  await _TMSDbContext.Courses.FirstOrDefaultAsync(c => c.Id == id);
            if (course == null)
            {
                return null;
            }

            _TMSDbContext.Courses.Remove(course);
            await _TMSDbContext.SaveChangesAsync();
            return course;
        }

        public async Task<IEnumerable<Course>> GetAllAsync()
        {
            return await _TMSDbContext.Courses.ToListAsync();
        }
        public async Task<Course> GetAsync(int id)
        {
            return await _TMSDbContext.Courses.FirstOrDefaultAsync(r => r.Id == id);
        }
    } 
}

