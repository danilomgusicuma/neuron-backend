const express = require('express');

const sendEmailController = require('./sendEmail.js')

const app = express();

app.use(express.json());

console.log(">>>>>>>>>",sendEmailController.sendEmail)
app.get('/consultation', sendEmailController.sendEmail)

app.listen(3333);