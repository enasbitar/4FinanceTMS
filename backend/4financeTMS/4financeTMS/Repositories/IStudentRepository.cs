using _4financeTMS.Models;

namespace _4financeTMS.Repositories
{
    public interface IStudentRepository 
    {
        Task<IEnumerable<Student>> GetAllAsync();

        Task<Student> GetAsync(int id);

        Task<Student> CreateStudentAsync(Student student);

        Task<Student> DeleteStudentAsync(int id);
    }
}



