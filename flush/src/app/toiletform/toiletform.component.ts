import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToiletRegisterService } from '../toilet-register.service';
import { Toilet } from '../toilet.model';

@Component({
  selector: 'app-toiletform',
  templateUrl: './toiletform.component.html',
  styleUrls: ['./toiletform.component.css']
})
export class ToiletformComponent implements OnInit {
  myForm!: FormGroup;
  @Input() latitudeInput!: number;
  @Input() longitudeInput!: number;
  toilet = Toilet;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: ToiletRegisterService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      photo: [null, []],
      total_rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      user: [parseInt(localStorage.getItem('id')!, 10)],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = new FormData();
  
      Object.keys(this.myForm.value).forEach(key => {
        formData.append(key, this.myForm.get(key)!.value);
      });
  
      formData.append('latitude', this.longitudeInput.toFixed(6).toString());
      formData.append('longitude', this.latitudeInput.toFixed(6).toString());
  
      const photoFileInput = document.getElementById('photo') as HTMLInputElement;
      const photoFile = photoFileInput.files?.[0];
  
      if (photoFile) {
        formData.append('photo', photoFile);
      } else {
        formData.append('photo', "");
      }
  
      console.log(formData);
  
      this.registerService.register(formData).subscribe(response => {
        console.log(response);
        alert('Successful!');
        location.reload();
      });
    } else {
      console.log(this.myForm);
      alert('Not a valid form');
    }
  }
  
  reload() {
    location.reload();
  }
}