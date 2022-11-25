using _4financeTMS.Data;
using _4financeTMS.Models;
using Microsoft.EntityFrameworkCore;

namespace _4financeTMS.Repositories
{
    public class TeacherRepository : ITeacherRepository
    {
        //instance from the TMSDbContext
        private readonly TMSDbContext _TMSDbContext;
        //constructoer that inject the _TMSDbContext in the class
        public TeacherRepository(TMSDbContext tMSDbContext)
        {
               this._TMSDbContext = tMSDbContext;
        }

        public async Task<Teacher> CreateTeacherAsync(Teacher teacher)
        {
            teacher.Id = new Guid();
            await _TMSDbContext.Teachers.AddAsync(teacher);
            await _TMSDbContext.SaveChangesAsync();
            return teacher;

        }

        public async Task<Teacher> DeleteTeacherAsync(Guid id)
        {
            var teacher = await _TMSDbContext.Teachers.FirstOrDefaultAsync(x => x.Id == id);
            if (teacher == null)
            {
                return null;
            }

            _TMSDbContext.Teachers.Remove(teacher);
            await _TMSDbContext.SaveChangesAsync();
            return teacher; 
        }

        public async Task<IEnumerable<Teacher>> GetAllAsync()
        {
            return await _TMSDbContext.Teachers.ToListAsync();
        }

        public async Task<Teacher> GetAsync(Guid id)
        {
            return await _TMSDbContext.Teachers.FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<Teacher> UpdateTeacherAsync(Guid id, Teacher teacher)
        {
            var existingTeacher = await _TMSDbContext.Teachers.FirstOrDefaultAsync();
            if(existingTeacher == null) { return null; }

            existingTeacher.Name = teacher.Name;
            existingTeacher.Email = existingTeacher.Email;
            existingTeacher.Speciality = teacher.Speciality;

            await _TMSDbContext.SaveChangesAsync();
            return existingTeacher;
        }
    }
}
