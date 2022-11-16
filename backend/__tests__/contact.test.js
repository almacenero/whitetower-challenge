const mockingoose = require('mockingoose')
const ContactModel = require('../models/Contact')
const {findAllContacts, createAContact, findContactById, deleteAContact,
    updateAContact} = require('../controllers/contact')

  describe('Test contact controllers', () => {
    beforeEach(() => {
        mockingoose.resetAll();
      });
    it('should return the list of contact', async () => {
        const response = [
            {
              name: "yasserX",
              address: "Pelieo",
              phoneNumber: "99780",
              email: "yasserxx@hotmail.com",
            },
            {
                name: "yasser00",
                address: "Pelieo",
                phoneNumber: "99780",
                email: "yasserxx@hotmail.com",
              },
              {
                name: "yasser00666",
                address: "Pelieo",
                phoneNumber: "99780",
                email: "yasserxx@hotmail.com",
              },
          ]
        mockingoose(ContactModel).toReturn(response, 'find');

        const result = await findAllContacts()

        expect(JSON.parse(JSON.stringify(result))).not.toBe([])
        expect(JSON.parse(JSON.stringify(result))).not.toBeUndefined()
        expect(JSON.parse(JSON.stringify(result))).not.toBeNull()
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(response)
    })
    it('should create a contact', async () => {
        const data = {
            name: "yasserX",
            address: "Pelieo",
            phoneNumber: "99780",
            email: "yasserxx@hotmail.com",
          }

        const response = {
              name: "yasserX",
              address: "Pelieo",
              phoneNumber: "99780",
              email: "yasserxx@hotmail.com",
            }
          
        mockingoose(ContactModel).toReturn(response, 'save');

        const result = await createAContact(data)

        expect(JSON.parse(JSON.stringify(result))).not.toBe([])
        expect(JSON.parse(JSON.stringify(result))).not.toBeUndefined()
        expect(JSON.parse(JSON.stringify(result))).not.toBeNull()
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(response)
    })
    it('should return a contact by id', async () => {
        const id = 1

        const response = {
              name: "yasserX222",
              address: "Pelieo",
              phoneNumber: "99780",
              email: "yasserxx@hotmail.com",
            }
          
        mockingoose(ContactModel).toReturn(response, 'findOne');

        const result = await findContactById(id)

        expect(JSON.parse(JSON.stringify(result))).not.toBeUndefined()
        expect(JSON.parse(JSON.stringify(result))).not.toBeNull()
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(response)
    })
    it('should delete a contact', async () => {
        const id = 1

        const response = {
                "acknowledged": true,
                "deletedCount": 1
              }
          
        mockingoose(ContactModel).toReturn(response, 'remove');

        const result = await deleteAContact(id)

        expect(JSON.parse(JSON.stringify(result))).not.toBeUndefined()
        expect(JSON.parse(JSON.stringify(result))).not.toBeNull()
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(response)
    })
    it('should update a contact', async () => {
        const id = 1

        const data = {
            name: "testName",
            address: "La palma",
            phoneNumber: "42252525",
            email: "test@ha.com"
        }

        const response = {
                "acknowledged": true,
                "deletedCount": 1
              }
          
        mockingoose(ContactModel).toReturn(response, 'updateOne');

        const result = await updateAContact(id, data)

        expect(JSON.parse(JSON.stringify(result))).not.toBeUndefined()
        expect(JSON.parse(JSON.stringify(result))).not.toBeNull()
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(response)
    })
  })