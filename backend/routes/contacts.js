const { Router } = require('express')
const Contact = require('../models/Contact')

const router = Router()


router.get('/', (req, res) => {
  res.send('welcome white tower clients')
})

router.post('/', async (req, res) => {
  try {
    const contact =  new Contact({
      name: req.body.name,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      email:  req.body.email
    })
    console.log('contact--->', contact)
    const response = await contact.save()
    console.log("response --->", response)
    res.send('creeated')
    
    
  
  } catch(error) {
    console.log('Error ', error)
    res.json({message: error})
  }
  
})

module.exports = router