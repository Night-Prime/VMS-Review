import { Injectable } from '@angular/core';
import { FacebookAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class FbAuthService {

  constructor(
    private fb: AngularFireAuth
  ) { }

  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }

  AuthLogin (provider: any){
    return this.fb
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error)
    })
  }
}