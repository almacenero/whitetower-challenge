import { Component } from '@angular/core';
import { ContactsService } from './../contacts.service';
import { Contact } from './../types/Contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  constructor(private contactsService: ContactsService) {}

  contacts: Contact[] = [];

  ngOnInit(): void {
    // this.contactsService.getContacts().then((data) => {
    //   this.contacts = data;
    // });
    this.contactsService.getContacts().then((data) => {
      this.contacts = data;
    });
  }
}
