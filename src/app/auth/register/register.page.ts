import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthorizationService) { }

  registerForm: FormGroup;
  ngOnInit() {
    this.createRegisterFormGroup();
  }

  createRegisterFormGroup() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  async register() {
    if (this.registerForm.valid) {
      try {
        const data = new User();
        data.setUserValues(this.registerForm.value);
        await this.authService.registerService(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      Object.keys(this.registerForm.controls).forEach(control => {
        this.registerForm.get(control).markAsTouched({ onlySelf: true});
      });
    }
  }
}
