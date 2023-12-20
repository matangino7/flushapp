import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ReviewRegisterService } from '../review-register.service';
import { DataServiceService } from '../data-service.service';
import { first, take } from 'rxjs';

@Component({
  selector: 'app-reviewform',
  templateUrl: './reviewform.component.html',
  styleUrls: ['./reviewform.component.css']
})
export class ReviewformComponent implements OnInit{
    myForm!: FormGroup;
    @Input point_id!: number;

    constructor(
        private formBuilder: FormBuilder,
        private ReviewRegisterService: ReviewRegisterService,
        private dataService: DataServiceService
    ) {}

    ngOnInit(): void {
        this.myForm = this.formBuilder.group({
            text_review: ['', [Validators.required]],
            numeric_review: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
            user: [parseInt(localStorage.getItem('id')!, 10)],
        });
    }


    onSubmit() {
        if (this.myForm.valid) {
            this.myForm.addControl("point", new FormControl(this.point_id, [Validators.required]));
            this.ReviewRegisterService.register(this.myForm.value).subscribe(response => {
                console.log(response);
                alert("Review added!");
                window.location.href = "/map-user-page";
            })
        }
    }
}
