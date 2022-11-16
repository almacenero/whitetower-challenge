const { Router } = require('express')
const Contact = require('../models/Contact')

const router = Router()


router.get('/', async (req, res) => {
  try{
    const response = await Contact.find()
    res.send(response) 
  }catch(error) {
    console.log('Error ', error)
    res.json({message: error})
  }
  res.send('welcome white tower clients')
})

router.post('/', async (req, res) => {
    const contact =  new Contact({
      name: req.body.name,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      email:  req.body.email
    })
    try {
    const response = await contact.save()
    res.send(response) 
  
  } catch(error) {
    console.log('Error ', error)
    res.json({message: error})
  }
  
})

router.get('/:id', async (req, res) => {
  try{
    const response = await Contact.findById(req.params.id)
    res.send(response) 
  }catch(error) {
    console.log('Error ', error)
    res.json({message: error})
  }
})

module.exports = router