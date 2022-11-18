import { Component, Input } from '@angular/core';
import { Contact } from './../../types/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() contact: Contact = {} as Contact;

  isEditing: Boolean = false;

  edit = () => {
    this.isEditing = true;
  };

  remove = () => {};

  save = () => {
    this.isEditing = false;
  };
}
