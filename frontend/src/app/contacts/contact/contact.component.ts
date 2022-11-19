import { Component, Input } from '@angular/core';
import { Contact } from './../../types/Contact';
import { ContactsService } from 'src/app/contacts.service';
import { ContactsComponent } from 'src/app/contacts/contacts.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(
    private contactsService: ContactsService,
    private contactsComponent: ContactsComponent
  ) {}
  @Input() contact: Contact = {} as Contact;

  isEditing: Boolean = false;

  form: Contact = {
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
  };

  edit = () => {
    this.isEditing = true;
    this.form = this.contact;
  };

  remove = () => {
    console.log('contact', this.contact);
    this.contactsService.removeContact(this.contact);
    this.contactsComponent.contacts = this.contactsComponent.contacts.filter(
      (contact) => contact !== this.contact
    );
  };

  save = () => {
    console.log('on submit', this.form);
    this.isEditing = false;
    this.contactsService.editContact(this.contact);
  };
}
