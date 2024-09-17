import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class EmailService {
  constructor(private _mailerService: MailerService) {}

  async sendUserConfirmation(url: string, name: string, email: string) {
    //const url = `${process.env.FRONT_URL}/auth/confirm?token=${token}&email=${email}`;
    return await this._mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: join(__dirname, 'templates', 'confirmation'), // `.hbs` extension is appended automatically
      context: {
        name: name,
        url,
      },
    });
  }

  async sendResetPassword(url: string, name: string, email: string) {
    //const url = `${process.env.FRONT_URL}/auth/reset?token=${token}&email=${email}`;

    return await this._mailerService.sendMail({
      to: email,
      // from: '"Support Team" <
      subject: 'Nice App! Reset your Password',
      template: join(__dirname, 'templates', 'reset'), // `.hbs` extension is appended automatically
      context: {
        name: name,
        url,
      },
    });
  }
}
