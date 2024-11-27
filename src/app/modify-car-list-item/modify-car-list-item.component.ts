import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";

@Component({
  selector: 'app-modify-car-list-item',
  templateUrl: './modify-car-list-item.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective
  ],
  styleUrls: ['./modify-car-list-item.component.css']
})
export class ModifyCarListItemComponent implements OnInit {

  carForm: FormGroup;
  car!: Car;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    protected router: Router,
    private route: ActivatedRoute
  ) {
    this.carForm = this.fb.group({
      id: [null],
      makingYear: ['', Validators.required],
      companyName: ['', Validators.required],
      modelName: ['', Validators.required],
      color: ['', Validators.required],
      imgPath: ['', Validators.required],
      isElectric: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carService.getCarById(+id).subscribe(car => {
        if (car) {
          this.car = car;
          this.carForm.patchValue(car);
        }
      });
    }
  }

  onSubmit(): void {
    const car: Car = this.carForm.value;
    if (car.id) {
      this.carService.updateCar(car).subscribe(() => {
        this.router.navigate(['/cars']);
        this.carForm.reset();
      });
    } else {
      car.id = this.carService.generateNewID();
      this.carService.addCar(car).subscribe(() => {
        this.router.navigate(['/cars']);
        this.carForm.reset();
      });
    }
  }

}
