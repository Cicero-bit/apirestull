import axios from 'axios';

export async function brevo(path, data) {
  try {
    const response = await axios({
      method: 'POST',
      url: `https://api.brevo.com/v3/${path}`,
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVOAPIKEY,
        'content-type': 'application/json',
      },
      data,
    });
    return response;
  } catch (e) {
    console.log('erro na primeira parte ', e);
    return e;
  }
}

export default async function sendEmail({ to, subject, html }) {
  const response = await brevo('smtp/email', {
    subject,
    htmlContent: html,
    sender: { email: 'contato@securitychannels.com.br', name: 'SecurityChannels' },
    to: [{ email: to }],
  });
  return response;
}
