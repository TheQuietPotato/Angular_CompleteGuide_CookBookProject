import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }
  

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const EMAIL = form.value.email;
    const PASSWORD = form.value.password;
    this.authService.signInUser(EMAIL, PASSWORD);
  }
}
