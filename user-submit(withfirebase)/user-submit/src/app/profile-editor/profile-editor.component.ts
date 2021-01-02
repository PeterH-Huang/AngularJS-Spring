import { Component, OnInit,EventEmitter } from '@angular/core';
import {ProfileEntry} from '../profile-entry';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
constructor(  ) { }

  ngOnInit(): void { }
@Input() profile: ProfileEntry;
@Output() fireSave: EventEmitter<ProfileEntry> = new EventEmitter();
@Output() fireDelete: EventEmitter<ProfileEntry> = new EventEmitter();


save(): void{
    this.fireSave.emit(this.profile);
  }
    


delete(): void {
  this.fireDelete.emit(this.profile);
  }
}