using _4financeTMS.InputModels;
using FluentValidation;

namespace _4financeTMS.Validators
{
    public class CreateTeacherRequestValidation : AbstractValidator<CreateTeacherInputModel>
    {
        public CreateTeacherRequestValidation()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Email).EmailAddress();
            RuleFor(x => x.Speciality).NotEmpty();
        }
    }
}
