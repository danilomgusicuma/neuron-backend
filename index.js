const express = require('express');

const cors = require('cors');

const sendEmailController = require('./sendEmail.js')

const app = express();

app.use(express.json());

app.use(cors());

app.get('/consultation', (request,response)=>response.json({status:'ok'}))
app.post('/consultation', sendEmailController.sendEmail)

app.listen(3333);