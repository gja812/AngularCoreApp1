using System.ComponentModel.DataAnnotations;

namespace AngularCoreApp1.Models.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
