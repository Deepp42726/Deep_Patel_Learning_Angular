import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Car} from "../models/car";
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
    imports: [
        RouterLink,
        ReactiveFormsModule
    ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  carForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private carService: CarService,
              private router: Router) {
    this.carForm = this.fb.group({
    id: ['', Validators.required],
    makingYear: ['', Validators.required],
    companyName: ['', Validators.required],
    modelYear: ['', Validators.required],
    color: ['', Validators.required],
    imgPath: ['', Validators.required],
    isElectric: [false]
  });
  }
  onSubmit(): void {
    console.log('Form submitted:', this.carForm.value);
    if (this.carForm.valid) {
      const car: Car = this.carForm.value;
      console.log('Car is valid:', car);
      if (car.id) {
        this.carService.updateCar(car).subscribe(() => this.router.navigate(['/cars']));
      } else {
        // @ts-ignore
        car.id = this.carService.getCars();
        this.carService.addCar(car).subscribe(() => this.router.navigate(['/cars']));
      }
    }
  }

}
