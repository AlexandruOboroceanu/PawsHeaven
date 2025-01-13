import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import * as logger from 'firebase-functions/logger';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Or use any other email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// The function to handle the form submission and send the email
export const sendFormEmail = functions.https.onRequest(async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, address, petName, petBreed, message } = req.body;
      
      const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'alexandruoboroceanu23@gmail.com', 
        subject: `New Adoption Application: ${petName}`,
        text: `
          New Adoption Application:

          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Address: ${address}
          Pet Name: ${petName}
          Pet Breed: ${petBreed}
          Message: ${message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      logger.info('Email sent successfully');

      // Send response back to the client
      res.status(200).send('Form submitted and email sent');
    } catch (error) {
      logger.error('Error sending email', error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
});
