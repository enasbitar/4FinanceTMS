using Microsoft.AspNetCore.Mvc;
using _4financeTMS.InputModels;
using _4financeTMS.Repositories;



namespace _4financeTMS.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentRepository studentRepository;
        public StudentsController(IStudentRepository studentRepository)
        {
            this.studentRepository = studentRepository;
        }
        [HttpGet]

        public async Task<IActionResult> GetAllStudents()
        {
            var students = await studentRepository.GetAllAsync();
            var studentsDto = new List<Dtos.StudentDto>();
            students.ToList().ForEach(student =>
            {
                var studentDto = new Dtos.StudentDto()
                {
                    StudentId = student.Id,
                    Name = student.Name,
                    Email = student.Email,
                    Major = student.Major,
                };

                studentsDto.Add(studentDto);
            });
            return Ok(studentsDto);
        }

        [HttpGet("{id:int}")]
        [ActionName("GetStudentAsync")]

        public async Task<ActionResult> GetStudentAsync(int id)
        {
            var student = await studentRepository.GetAsync(id);
            if (student == null)
            {
                return NotFound();
            }
            var studentDto = new Dtos.StudentDto()
            {
                StudentId = student.Id,
                Name = student.Name,
                Email = student.Email,
                Major = student.Major,
            };
            return Ok(studentDto);
        }

        [HttpPost]
        public async Task<IActionResult> CreateStudent(CreateStudentInputModel createStudentInputModel)
        {
            var student = new Models.Student()
            {
                Name = createStudentInputModel.Name,
                Email = createStudentInputModel.Email,
                Major = createStudentInputModel.Major
            };
            student = await studentRepository.CreateStudentAsync(student);
            var studentDto = new Dtos.StudentDto
            {
                StudentId = student.Id,
                Name = student.Name,
                Email = student.Email,
                Major = student.Major,
            };
            return CreatedAtAction(nameof(GetStudentAsync), new { id = studentDto.StudentId }, studentDto);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteStudentAsync(int id)
        {
            var student = await studentRepository.DeleteStudentAsync(id);
            if (student == null)
            {
                return NotFound();
            }
            var studentDto = new Dtos.StudentDto
            {
                Name = student.Name,
                Email = student.Email,
                Major = student.Major,
            };

            return Ok(studentDto);
        }
    }
}


