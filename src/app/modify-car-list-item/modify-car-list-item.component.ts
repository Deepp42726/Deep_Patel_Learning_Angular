import { Component, OnInit } from '@angular/core';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgIf } from "@angular/common";
import {CarService} from "../services/car.service";
import {Car} from "../car";

@Component({
  selector: 'app-modify-car-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PageNotFoundComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './modify-car-list-item.component.html',
  styleUrls: ['./modify-car-list-item.component.css']
})
export class ModifyCarListItemComponent implements OnInit {
  carForm: FormGroup;
  car: Car | undefined;

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
      color: [''],
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

  onSubmit(): void {
    if (this.carForm.valid) {
      const car = this.carForm.value;
      if (car.id) {
        this.carService.updateCar(car).subscribe(() => this.router.navigate(['/cars']));
      }
      else {
this.carService.addCar(car).subscribe(() => this.router.navigate(['/cars']));
      }
    }
  }


  onDelete(): void {
    const id = this.carForm.value.id;
    if (id) {
      this.carService.deleteCar(id).subscribe(() => this.router.navigate(['/cars']));
    }
  }

  navigateToCarList(): void {
    this.router.navigate(['/cars']);
  }
}
