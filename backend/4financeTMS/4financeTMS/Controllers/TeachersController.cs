using _4financeTMS.Dtos;
using _4financeTMS.InputModels;
using _4financeTMS.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _4financeTMS.Controllers
{
    //[btotl3 bel swagger btn hwdee]
    [Route("[controller]")]
    [ApiController]
    public class TeachersController : ControllerBase
    {
        //create an instance from the repository
        private readonly ITeacherRepository teacherRepository;

        //constructor to inject the teacher repository in the class
        public TeachersController(ITeacherRepository teacherRepository)
        {
            this.teacherRepository = teacherRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTeachers()
        {
            //here were getting the  teachers from the DB using the repository 
            var teachers = await teacherRepository.GetAllAsync();
            //declare a teacher dto list to return it to th user
            var teachersDto = new List<Dtos.TeacherDto>();
            //loop over the teachers 
            teachers.ToList().ForEach(teacher =>
            {
                //create a teacher dto and fill it from the teacher model 
                var teacherDto = new Dtos.TeacherDto()

                {
                    Id = teacher.Id,
                    Name = teacher.Name,
                    Email = teacher.Email,
                    Speciality = teacher.Speciality,
                };
                //add each teacher dto to the teachers list 
                teachersDto.Add(teacherDto);
            });
            return Ok(teachersDto);
        }

        [HttpGet("{id:guid}")]
        [ActionName("GetTeacherAsync")]
        public async Task <ActionResult> GetTeacherAsync(Guid id)

        {
            //use the repository
            var teacher = await teacherRepository.GetAsync(id);
            if (teacher == null)
            {
                return NotFound();
            }
            // mapping
            var teacherDto = new Dtos.TeacherDto()
            {
                Id = teacher.Id,
                Name = teacher.Name,
                Email = teacher.Email,
                Speciality = teacher.Speciality,
            };
            return Ok(teacherDto);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTeacher(CreateTeacherInputModel createTeacherInputModel)
        {
        var teacher = new Models.Teacher()
        {
            Name = createTeacherInputModel.Name,
            Email = createTeacherInputModel.Email,
            Speciality = createTeacherInputModel.Speciality
        };
        teacher = await teacherRepository.CreateTeacherAsync(teacher);
            var teacherDto = new Dtos.TeacherDto
            {
                Id = teacher.Id,
                Name = teacher.Name,
                Email = teacher.Email,
                Speciality = teacher.Speciality
            };

            return CreatedAtAction(nameof(GetTeacherAsync), new { id = teacherDto.Id }, teacherDto);

        }


        [HttpDelete("{id:guid}")]
        public async Task <IActionResult> DeleteTeacherAsync(Guid id)
        {
            var teacher = await teacherRepository.DeleteTeacherAsync(id);
            if(teacher ==  null)
            {
                return NotFound();
            }
            var teacherDto = new Dtos.TeacherDto
            {
                Id = teacher.Id,
                Name = teacher.Name,
                Email = teacher.Email,
                Speciality = teacher.Speciality
            };

            return Ok(teacherDto);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateTeacherAsync([FromRoute]Guid id, [FromBody] UpdateTeacherInputModel updateTeacherInputModel)
        {
            //convert Dto to model 
            var teacher = new Models.Teacher()
            {
                Name = updateTeacherInputModel.Name,
                Speciality = updateTeacherInputModel.Speciality,
            };


            //update teacher using repository

            teacher = await teacherRepository.UpdateTeacherAsync(id , teacher);
            //if null return not found 
            if (teacher == null)
            {

                return NotFound();
            }

            //convert from model back to doto 
            var teacherDto = new Dtos.TeacherDto
            {
                Id = teacher.Id,
                Name = teacher.Name,
                Speciality = teacher.Speciality,
            };

            return Ok(teacherDto);
            //return Ok Response
          
        }

    }
}
