const Contact = require('../models/Contact')

const findAllContacts = async () => {
    const response = await Contact.find()
    return response
      
}

const createAContact = async ({name, address, phoneNumber, email}) => {
    const contact =  new Contact({
        name,
        address,
        phoneNumber,
        email
      })
    const response = await contact.save()
    return response
    
}

const findContactById = async (id) => {
    const response = await Contact.findById(id)
    return response
}


const deleteAContact = async (id) => {
    const response = await Contact.remove({_id: id})
    return response
}

const updateAContact = async (id, {name, address, phoneNumber, email}) => {
    const response = await Contact.updateOne({_id: id}, {
        $set: {
          name,
          address,
          phoneNumber,
          email
        }
      })
      return response
}

module.exports = {
    findAllContacts,
    createAContact,
    findContactById,
    deleteAContact,
    updateAContact
}