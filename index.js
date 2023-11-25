require('dotenv').config()
const express = require('express')
const sendMail = require('./libs/mailer')
const app = express()
const port = 3000

app.use(express.json())

app.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  sendMail(email, `Halo ${name}`, 
    `Terima kasih sudah mendaftar di aplikasi kami! Silahkan klik
     link berikut untuk proses verifikasi email anda : `
  )
  res.status(200).json({
    status: 'ok',
    message: `Berhasil Register! silahkan cek email untuk verifikasi`
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})