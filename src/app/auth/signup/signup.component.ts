import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }
  

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const EMAIL = form.value.email;
    const PASSWORD = form.value.password;
    this.authService.signUpUser(EMAIL, PASSWORD);
  }


}
