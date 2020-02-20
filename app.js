const nodemailer = require('nodemailer');
const keys = require('./config/keys');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: keys.gmailSender.user,
      pass: keys.gmailSender.pass
    }
  });

  var mailOptions = {
    from: keys.gmailSender.user,
    to: keys.gmailReceivers[0].user,
    subject: 'Sending Email using Node.js',
    text: 'Sent a new email. Can you please be more efficient?'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });