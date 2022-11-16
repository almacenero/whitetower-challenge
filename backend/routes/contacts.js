const { Router } = require('express')
const Contact = require('../models/Contact')
const {findAllContacts, 
  createAContact, 
  findContactById,
  deleteAContact,
  updateAContact} = require('../controllers/contact')

const router = Router()


router.get('/', async (req, res) => {
  try{
  const result = await findAllContacts()
  res.send(result)
} catch(error) {
  console.log('Error ', error)
  res.json({message: error})
}
})

router.post('/', async (req, res) => {
  try{
  const result = await createAContact(req.body)
  res.send(result)
} catch(error) {
  console.log('Error ', error)
  res.json({message: error})
}
})

router.get('/:id', async (req, res) => {
  try{
    const result = await findContactById(req.params.id)
    res.send(result) 
  }catch(error) {
    console.log('Error ', error)
    res.json({message: error})
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const result = await deleteAContact(req.params.id)
    res.send(result) 
  }catch(error) {
    console.log('Error ', error)
    res.json({message: error})
  }
})

router.patch('/:id', async (req, res) => {
  try{
    const result = await updateAContact(req.params.id, req.body)
    res.send(result) 
  }catch(error) {
    console.log('Error ', error)
    res.json({message: error})
  }
})

module.exports = router