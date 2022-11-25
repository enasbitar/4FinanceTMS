namespace _4financeTMS.Models
{
    public class Teacher
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;  
        public string Email { get; set; } = string.Empty;
        public string Speciality { get; set; } = string.Empty;
        
        //Navigation properties
        public IEnumerable<Course> Courses { get; set; }

    }
}
