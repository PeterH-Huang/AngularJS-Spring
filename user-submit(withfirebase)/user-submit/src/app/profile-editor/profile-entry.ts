import { FormGroup, FormControl,Validators } from '@angular/forms';

export class ProfileEntry {
    public id: string; 
    firstName = new FormControl('',);
    lastName = new FormControl('',);
    phone = new FormControl('', Validators.pattern("[1-9][0-9]{2}[1-9][0-9]{6}"));
    email = new FormControl('',);


constructor() {
    this.id = null;
  }
}