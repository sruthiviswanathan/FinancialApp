import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthorizationService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

 async login() {
    if(this.loginForm.valid) {
      try {
        const data = {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
        };
        await this.authService.loginService(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      Object.keys(this.loginForm.controls).forEach(control => {
        this.loginForm.get(control).markAsTouched({ onlySelf: true});
      });
    }
  }
}
