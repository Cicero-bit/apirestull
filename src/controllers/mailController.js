import sendMail from '../services/mailService';

class MailController {
  async contact(req, res) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    try {
      const response = await sendMail({
        to: email,
        subject: `Nova mensagem de contato: ${name}`,
        html: `
          <html>
            <body>
              <h3>Mensagem recebida do site</h3>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mensagem:</strong><br>${message}</p>
            </body>
          </html>
        `,
      });
      return res.status(200).json('Email sent successfuly', response);
    } catch (error) {
      return res.status(500).json('Something went wrong');
    }
  }
}

export default new MailController();
