require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

const sendMail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.GMAIL_USERNAME,
        to,
        subject,
        text
    } 
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(error)
        }else{
            console.log('Email sent: ' + info.response)
        }
    })
}

const sendMailHTML = (to, subject, html) => {
    const mailOptions = {
        from: process.env.GMAIL_USERNAME,
        to,
        subject,
        html
    } 
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(error)
        }else{
            console.log('Email sent: ' + info.response)
        }
    })
}


module.exports = {
    sendMail,
    sendMailHTML
}