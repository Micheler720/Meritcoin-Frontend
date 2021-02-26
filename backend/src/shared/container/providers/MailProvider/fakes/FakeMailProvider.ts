import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProvider from '../models/IMailProvider';

class FakeMailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  async sendMail(sendEmail: ISendMailDTO): Promise<void> {
    this.messages.push(sendEmail);
  }
}

export default FakeMailProvider;
