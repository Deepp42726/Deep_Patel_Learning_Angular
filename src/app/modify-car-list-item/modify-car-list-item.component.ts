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
    this.carForm.statusChanges.subscribe(status => console.log('Form Status:', status));
    this.carForm.valueChanges.subscribe(value => console.log('Form Value:', value));

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.carService.getCarById(id).subscribe({
        next: car => {
          if (car) {
            this.carForm.patchValue(car);
          }
        },
        error: err => console.error('Error fetching car:', err)
      });
    }
  }


  onSubmit(): void {
    if (this.carForm.valid) {
      const car: Car = this.carForm.value;

      if (car.id) {
        // Update the existing car
        this.carService.updateCar(car).subscribe({
          next: () => {
            console.log('Car updated successfully.');
            this.router.navigate(['/cars'], { state: { refresh: true } }); // Navigate with state to trigger refresh
          },
          error: err => console.error('Error updating car:', err)
        });
      } else {
        // Add new car without manually generating an ID
        this.carService.addCar(car).subscribe({
          next: () => {
            console.log('Car added successfully.');
            this.router.navigate(['/cars'], { state: { refresh: true } }); // Navigate with state to trigger refresh
          },
          error: err => console.error('Error adding car:', err)
        });
      }
    } else {
      console.error('Form is invalid:', this.carForm.errors);
    }
  }




}
