﻿namespace _4financeTMS.Dtos
{
    public class TeacherDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Speciality { get; set; } = string.Empty;
    }
}
