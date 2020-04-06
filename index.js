const express = require('express');
var port = process.env.PORT || 3333;
const cors = require('cors');
const sendEmailController = require('./sendEmail.js')

const app = express();

app.use(express.json());

app.use(cors({
  origin:['https://www.institutoneuron.com.br', 'https://www.teste.institutoneuron.com.br']
}));

app.get('/consultation', (request,response)=>response.json({status:'ok'}))
app.post('/consultation', sendEmailController.sendEmail)

app.listen(port, ()=>console.log(`listening to port:${port}`));