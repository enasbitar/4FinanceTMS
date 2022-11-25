using _4financeTMS.Data;
using _4financeTMS.Models;
using Microsoft.EntityFrameworkCore;

namespace _4financeTMS.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly TMSDbContext _TMSDbContext;
        public StudentRepository(TMSDbContext tMSDbContext)
        {
            this._TMSDbContext = tMSDbContext;
        }

        public async Task<Student> CreateStudentAsync(Student student)
        {
            student.Id = new int();
            await _TMSDbContext.Students.AddAsync(student);
            await _TMSDbContext.SaveChangesAsync();
            return student;
        }

        public async Task<Student> DeleteStudentAsync(int id)
        {
            var student = await _TMSDbContext.Students.FirstOrDefaultAsync(s => s.Id == id);
            if (student == null)
            {
                return null;
            }

            _TMSDbContext.Students.Remove(student);
            await _TMSDbContext.SaveChangesAsync();
            return student;
        }

        public async Task<IEnumerable<Student>> GetAllAsync()
        {
            return await _TMSDbContext.Students.ToListAsync();
        }

        public async Task<Student> GetAsync(int id)
        {
           return await _TMSDbContext.Students.FirstOrDefaultAsync(u => u.Id == id);
        }

    }
}






