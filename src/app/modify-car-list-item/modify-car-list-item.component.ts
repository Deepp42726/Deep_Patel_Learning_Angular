import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../models/car';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

@Component({
  selector: 'app-modify-car-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    PageNotFoundComponent
  ],
  templateUrl: './modify-car-list-item.component.html',
  styleUrls: ['./modify-car-list-item.component.css']
})
export class ModifyCarListItemComponent implements OnInit {
  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      id: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      color: ['']
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.carService.getCarById(id).subscribe(car => {
        if (car) {
          this.carForm.patchValue(car);
        }
      });
    }
  }

  addCar(): void {
    const newCar: Car = this.carForm.value;
    this.carService.addCar(newCar).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

  updateCar(): void {
    const updatedCar: Car = this.carForm.value;
    this.carService.updateCar(updatedCar).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

  onDelete(): void {
    const id = this.carForm.value.id;
    if (id) {
      this.carService.deleteCar(id).subscribe(() => {
        this.router.navigate(['/cars']);
      });
    }
  }
}
