import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body || '');

  const transporter = nodemailer.createTransport({
    host: 'in-v3.mailjet.com',
    port: 587,
    auth: {
      user: process.env.MAILJET_API_KEY,
      pass: process.env.MAILJET_API_SECRET,
    },
  });

  try {
    await transporter.sendMail({
      from: `${email}`,
      to: 'garriwebdeveloper@gmail.com',
      subject: `New contact form submission from ${name}`,
      text: `You have received a new submission from ${name} (${email}): ${message}`,
    });

    return { statusCode: 200, body: 'Mail sent' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { statusCode: 500, body: `Error sending mail: ${error}` };
  }
};

export { handler };
