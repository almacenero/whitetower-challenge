const express = require('express');
const bodyParser = require('body-parser')
require('dotenv/config')
const mongoose = require('mongoose')

const app = express();

const contactsRoute = require('./routes/contacts')

app.use(bodyParser.json())
app.use('/contacts', contactsRoute)

app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION, 
    {useNewUrlParser: true}, () => {
        console.log("Connected to mongodb")
})

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})