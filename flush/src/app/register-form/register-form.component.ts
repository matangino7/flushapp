import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
    myForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {
      this.myForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(10)]],
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]]
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
