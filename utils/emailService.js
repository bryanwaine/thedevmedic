import nodemailer from 'nodemailer';
import ContactEmail from './email_templates/contactEmail';

const contactEmailSubject = `You have a new message!`;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  //   secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

const sendContactEmail = async (name, email, message) => {
  try {
    const result = await transporter.sendMail({
      from: `'The Dev Medic' <info@thedevmedic.vercel.app>`,
      to: 'ezeaka.nwanne@gmail.com',
      subject: contactEmailSubject,
      html: ContactEmail(name, email, message),
    });
    return console.log(result);
  } catch (err) {
    return console.log(err);
  }
};

export {
  sendContactEmail
};
