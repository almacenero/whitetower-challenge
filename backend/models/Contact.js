const mongoose = require('mongoose')


const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    address: {
        type: String,
        required: true 
    },
    phoneNumber:  {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    }
})

module.exports = mongoose.model('Contacts', ContactSchema)

