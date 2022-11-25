using _4financeTMS.Dtos;
using _4financeTMS.InputModels;
using _4financeTMS.Models;
using _4financeTMS.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _4financeTMS.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseRepository courseRepository;
        public CoursesController(ICourseRepository courseRepository)
        {
            this.courseRepository = courseRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCourses()
        {
            var courses = await courseRepository.GetAllAsync();
            var coursesDto = new List<Dtos.CourseDto>();
            courses.ToList().ForEach(course =>
            {
                var courseDto = new Dtos.CourseDto()
                {
                    CourseId = course.Id,
                    Name = course.Name,
                    Description = course.Description,
                    CreditNumber = course.CreditNumber,

                };
                coursesDto.Add(courseDto);
            });
            return Ok(coursesDto);
        }

        [HttpGet("{id:int}")]
        [ActionName("GetCourseAsync")]
        public async Task<ActionResult> GetCourseAsync(int id)
        {
            var course = await courseRepository.GetAsync(id);
            if (course == null)
            {
                return NotFound();
            }
            var courseDto = new Dtos.CourseDto()
            {
                CourseId = course.Id,
                Name = course.Name,
                Description = course.Description,
                CreditNumber = course.CreditNumber,
            };
            return Ok(courseDto);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCourse(CreateCourseInputModel createCourseInputModel)
        {
            var course = new Models.Course()
            {
                Name = createCourseInputModel.Name,
                Description = createCourseInputModel.Description,
                CreditNumber = createCourseInputModel.CreditNumber
            };
            course = await courseRepository.CreateCourseAsync(course);
            var courseDto = new Dtos.CourseDto
            {
                CourseId = course.Id,
                Name = course.Name,
                Description = course.Description,
                CreditNumber = course.CreditNumber,
            };
            return CreatedAtAction(nameof(GetCourseAsync), new { id = courseDto.CourseId }, courseDto);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteCourseAsync(int id)
        {
            var course = await courseRepository.DeleteCourseAsync(id);
            if (course == null)
            {
                return NotFound();
            }
            var courseDto = new Dtos.CourseDto
            {
                Name = course.Name,
                Description = course.Description,
                CreditNumber = course.CreditNumber,
            };

            return Ok(courseDto);
        }
    }
}
