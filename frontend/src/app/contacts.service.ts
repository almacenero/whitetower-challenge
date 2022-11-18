import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

  getContacts = () => {
    return [
      {
        name: 'Yasser Quintana',
        address: 'La palma',
        phoneNumber: '097900000',
        email: 'yasser@gmail.com',
      },
      {
        name: 'Tomas Roncero',
        address: 'Malaga',
        phoneNumber: '87654444',
        email: 'tomas@gmail.com',
      },
      {
        name: 'Sandry Pico',
        address: 'Pelieo',
        phoneNumber: '556565656',
        email: 'sandry@gmail.com',
      },
    ];
  };
}
