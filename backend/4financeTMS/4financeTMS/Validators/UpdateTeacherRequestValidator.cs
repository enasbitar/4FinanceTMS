using _4financeTMS.InputModels;
using FluentValidation;

namespace _4financeTMS.Validators
{
    public class UpdateTeacherRequestValidator :AbstractValidator<UpdateTeacherInputModel>
    {
        public UpdateTeacherRequestValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Speciality).NotEmpty();

        }
    }
}
