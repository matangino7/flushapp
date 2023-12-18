import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
    myForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder, private loginService: LoginService, private authenticationService: AuthenticateService) {
      this.myForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(10)]],
      });
    }
  
    login() {
        this.loginService.login(this.myForm.value).subscribe(
          (response) => {
            this.authenticationService.login().subscribe();
          },
          (error) => {
            alert("One or more values are incorrect")
          }
    );}
    
    onSubmit() {
      if (this.myForm.valid) {
        this.login()
      }
 }
}
