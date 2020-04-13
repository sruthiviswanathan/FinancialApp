import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

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

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      Object.keys(this.registerForm.controls).forEach(control => {
        this.registerForm.get(control).markAsTouched({ onlySelf: true});
      });
    }
  }
}
