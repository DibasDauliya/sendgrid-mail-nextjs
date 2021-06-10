const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default (req, res) => {
  // res.status(200).json({ mail: 'value' })

  const body = JSON.parse(req.body)

  const message = `
  Name: ${body.text} \r\n
  Email: ${body.email} \r\n
  Message: ${body.message.toString()}
  `

  const msg = {
    to: 'seekoguide@gmail.com',
    from: 'dibasdauliya@gmail.com',
    subject: 'Hey There 😀',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }
  //ES6
  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  )
}
