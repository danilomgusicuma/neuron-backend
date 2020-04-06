var nodemailer = require('nodemailer');

module.exports = {
  sendEmail(request, response){
    let body = request.body

    let transporter = nodemailer.createTransport({
      host: "br262.hostgator.com.br",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'consultas@institutoneuron.com.br', // generated ethereal user
        pass: 'Neuron@2020' // generated ethereal password
      }
    });

    var mailOptions = {
      from: 'consultas@institutoneuron.com.br',
      to: 'consultas@institutoneuron.com.br',
      subject: 'Nova Consulta',
      text: `${JSON.stringify(body)}`
    };
    console.log('sending email')
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        return response.json({status:error})
      } else {
        console.log('Email sent: ' + info.response);
        return response.json({status:'ok'})
      }
    });
  }
}