import { Injectable } from '@angular/core';
import axios from 'axios';
import { Contact } from './types/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

  getContacts = async () => {
    const api = 'http://localhost:3001/contacts';
    try {
      const data = await axios.get(api);
      console.log('data--->', data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  removeContact = async (contact: Contact) => {
    console.log('xxxxxx', contact);
    const api = `http://localhost:3001/contacts/${contact._id}`;
    try {
      const data = await axios.delete(api);
      console.log('data--->', data);
      // return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  editContact = async (contact: Contact) => {
    console.log('xxxxxx', contact);
    const api = `http://localhost:3001/contacts/${contact._id}`;
    try {
      const data = await axios.patch(api, contact);
      console.log('data--->', data);
      // return data.data;
    } catch (error) {
      console.log(error);
    }
  };
}
