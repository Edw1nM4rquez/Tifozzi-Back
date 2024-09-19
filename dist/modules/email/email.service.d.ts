import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailService {
    private _mailerService;
    constructor(_mailerService: MailerService);
    sendUserConfirmation(url: string, name: string, email: string): Promise<SentMessageInfo>;
    sendResetPassword(url: string, name: string, email: string): Promise<SentMessageInfo>;
}
