import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8e1c0686dae033",
    pass: "f6abc106aaa070"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Pedro Lopes <pedrolopesgrc@gmail.com>",
      subject,
      html: body
    });
  }
}
