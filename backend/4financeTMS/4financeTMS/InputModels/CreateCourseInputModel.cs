﻿namespace _4financeTMS.InputModels
{
    public class CreateCourseInputModel
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int CreditNumber { get; set; }
    }
}

