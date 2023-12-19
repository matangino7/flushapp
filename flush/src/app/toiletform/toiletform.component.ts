import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToiletRegisterService } from '../toilet-register.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-toiletform',
  templateUrl: './toiletform.component.html',
  styleUrls: ['./toiletform.component.css']
})
export class ToiletformComponent {
    myForm: FormGroup;
    @Input() latitudeInput!: number;
    @Input() longitudeInput!: number;
  
    constructor(private formBuilder: FormBuilder, private registerService: ToiletRegisterService,) {
      this.myForm = this.formBuilder.group({
        description: ['', [Validators.required]],
        image: ['', []],
        number: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
        username: [localStorage.getItem("username")],
        latitude: [this.latitudeInput],
        longitudeInput: [this.longitudeInput]
      });
    }
  
    onSubmit() {
      if (this.myForm.valid) {
        this.registerService.register(this.myForm.value).subscribe(response => {
            console.log(response);
            alert("Registration successful!");
            window.location.href = "/login";
        });
    } else {
        console.log(this.myForm);
        alert("Not a valid form");
      }
 }
}
