import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
    myForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder, private registerService: RegisterService,) {
      this.myForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(10)]],
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]]
      });
    }
  
    onSubmit() {
      if (this.myForm.valid) {
        this.registerService.register(this.myForm.value).subscribe(response => {
            console.log(response);
            alert("Registration successful!");
            window.location.href = "/login";
            // } else [
            //     alert("error, please try again")
            // ]
        });
    } else {
        console.log(this.myForm);
        alert("Not a valid form");
      }
    }
}
