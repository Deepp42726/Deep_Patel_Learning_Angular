import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../models/car';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

@Component({
  selector: 'app-modify-car-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PageNotFoundComponent
  ],
  templateUrl: './modify-car-list-item.component.html',
  styleUrls: ['./modify-car-list-item.component.css']
})
export class ModifyCarListItemComponent implements OnInit {
  carForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
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

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.carService.getCarById(id).subscribe({
        next: car => {
          if (car) {
            this.carForm.patchValue(car);
          }
        },
        error: err => {
          this.error = 'Error fetching car';
          console.error('Error fetching car:', err);
        }
      });
    }
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
