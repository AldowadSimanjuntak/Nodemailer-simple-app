require('dotenv').config()
const express = require('express')
const ejs= require('ejs')
const { sendMail, sendMailHTML} = require ('./libs/mailer')
const app = express()
const port = 3000

app.use(express.json())

app.post('/register', (req, res) => {
    const { email, password, name } = req.body;
  //sendMail(email, `Halo ${name}`, 
    //`Terima kasih sudah mendaftar di aplikasi kami! Silahkan klik
     //link berikut untuk proses verifikasi email anda : `
     ejs.renderFile(__dirname + "/templates/register.ejs",
     { name : name}, function (err, data){
      if (err){
        console.log(err);
      }
      else{
        sendMailHTML(email, `Halo User ${name}`, data)
      }
     })
  
  res.status(200).json({
    status: 'ok',
    message: `Berhasil Akses Menu Forgot Password! silahkan cek email untuk verifikasi`
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})