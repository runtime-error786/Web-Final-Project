const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
let {transporter} = require("../Config/Transporter");

async function sendEmail(email) {
 

  const mailOptions = {
    from: 'f219085@cfd.nu.edu.pk',// not any user email its system email address
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

function handleEmail(req, res) {
  try {
    console.log(req.body.token);
    const decodedToken = jwt.decode(req.body.token, { complete: true });
    console.log(decodedToken.payload);
    const email = decodedToken.payload.email;
    sendEmail(email);
    
  } catch (error) {
    console.error('Error handling email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { handleEmail };
