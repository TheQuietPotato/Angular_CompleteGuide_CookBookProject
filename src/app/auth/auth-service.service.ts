import * as firebase from 'firebase'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable(
)
export class AuthService {
  token: string;

  constructor(private angRouter: Router) { }

  signUpUser(email: string, password: string) {
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then(data => console.log('data :>> ', data))
    //   .catch(error => console.log('error :>> ', error));
  }

  signInUser(email, password) {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(res => {
    //     firebase.auth().currentUser.getIdToken().then(
    //       token => {
    //         this.token = token;
    //         console.log(token)
    //         this.angRouter.navigate(['/'])
    //       }
    //     )
    //   })
    //   .catch(error => console.log(error));
    this.angRouter.navigate(['/'])
  }

  getToken() {
    // firebase.auth().currentUser.getIdToken()
    //   .then((tk: string) => {
    //     this.token = tk;
    //   })
    // return this.token;
    return 'TOKEN'
  }

  isAuthenticated() {
    // return this.token != null;
    return true;
  }

  logout() {
    // firebase.auth().signOut();
    this.token = null;
  }
}