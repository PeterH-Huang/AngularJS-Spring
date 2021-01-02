import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void { }
  validated = false;
  profileForm = new FormGroup({
    firstName : new FormControl('',),
    lastName : new FormControl('',),
    phone : new FormControl('', Validators.pattern("[1-9][0-9]{2}[1-9][0-9]{6}")),
    email : new FormControl('',)
    })
    
  onSubmit() : void {
    this.validated = true;
  }
    
}
