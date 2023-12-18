import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
    myForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {
      this.myForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(10)]],
      });
    }
  
    onSubmit() {
      if (this.myForm.valid) {
        console.log(this.myForm.value);
      } else {
        console.log(this.myForm);
      }
 }
}
