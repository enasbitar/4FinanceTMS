namespace _4financeTMS.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Major { get; set; } = string.Empty;


        //Navigation properties
        public IEnumerable<Course> Courses { get; set; }
    }
}
