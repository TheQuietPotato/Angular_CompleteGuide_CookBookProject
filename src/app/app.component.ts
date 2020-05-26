import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBPAoDlpayHXRWoJemqAvmG0_SEksN1wmc',
      authDomain: 'https://angular-recipe-book-2db25.firebaseio.com/'
    })
  }
}
