import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction, DocumentReference} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {ProfileEntry} from '../profile-entry';

@Injectable({
  providedIn: 'root'
})
export class ProfileDbService {

  constructor(private firestore: AngularFirestore) { }

  getProfile(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('profiles').snapshotChanges();
  }

  createProfile(profile: ProfileEntry): Promise<DocumentReference> {
    delete profile.id;
    return this.firestore.collection('profiles').add({...profile});
  }

  updateProfile(profile: ProfileEntry): Promise<void> {
    const profileId = profile.id;
    delete profile.id;
    return this.firestore.collection('profiles').doc(profileId).update(profile);
  }

  deleteProfile(profileId: string): Promise<void> {
    return this.firestore.collection('profiles').doc(profileId).delete();
  }
}