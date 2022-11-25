using _4financeTMS.Models;

namespace _4financeTMS.Repositories
{
    public interface ITeacherRepository
    {
        Task<IEnumerable<Teacher>> GetAllAsync();

        Task <Teacher> GetAsync (Guid id);

        Task<Teacher> CreateTeacherAsync (Teacher teacher);

        Task<Teacher> DeleteTeacherAsync (Guid id);

        Task<Teacher> UpdateTeacherAsync(Guid id , Teacher teacher);  
    }
}
