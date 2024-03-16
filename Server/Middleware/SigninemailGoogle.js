const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'f219085@cfd.nu.edu.pk',
      pass: '' 
    }
  });

  const mailOptions = {
    from: 'f219085@cfd.nu.edu.pk',
    to: email,
    subject: 'Thank You for Signing In 😊',
    html: `<div style="text-align: center; font-family: Arial, sans-serif;">
    <h1 style="color: #333; font-size: 24px; margin-bottom: 20px;">Thank You for Signing In!</h1>
    <p style="font-size: 16px; color: #666; margin-bottom: 20px;">We're thrilled to have you as a part of our community. Explore our latest electronics deals now!</p>
    <a href="http://localhost:3000/signin" style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Shop Now</a>
</div>
`
  };

  console.log('Before sending email');

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

function handleEmailMiddleware(req, res, next) {
  try {
    console.log(req.body.token);
    const decodedToken = jwt.decode(req.body.token, { complete: true });
    console.log(decodedToken.payload);
    const email = decodedToken.payload.email;
    sendEmail(email);
    next();
  } catch (error) {
    console.error('Error handling email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { handleEmailMiddleware };