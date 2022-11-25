using _4financeTMS.Models;

namespace _4financeTMS.Repositories
{
    public interface ICourseRepository
    {
        Task<IEnumerable<Course>> GetAllAsync();

        Task<Course> GetAsync(int id);

        Task<Course> CreateCourseAsync(Course course);

        Task<Course> DeleteCourseAsync(int id);

    }
}

