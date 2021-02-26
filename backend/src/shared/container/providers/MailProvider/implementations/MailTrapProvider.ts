import nodemailer, { Transporter } from 'nodemailer';
import { inject, injectable } from 'tsyringe';
import IMailTemplateProvider from '../../MailTemplateProvider/models/IMailTemplateProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProvider from '../models/IMailProvider';

@injectable()
class MailTrapProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    const transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '92fef39622c2a4',
        pass: '5cb903db4a332e',
      },
    });
    this.client = transport;
  }

  async sendMail({
    from,
    to,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    await this.client.sendMail({
      to: {
        address: to.email,
        name: to.name,
      },
      from: {
        address: from?.email || 'analitics@teste.com.br',
        name: 'Equipe analitcs',
      },
      html: await this.mailTemplateProvider.parse(templateData),
      subject,
    });
  }
}

export default MailTrapProvider;
