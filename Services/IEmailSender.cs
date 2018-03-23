﻿using System.Threading.Tasks;

namespace AngularCoreApp1.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
