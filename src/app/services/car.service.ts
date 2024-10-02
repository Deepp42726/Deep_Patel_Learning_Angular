import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Car[] {
    return [
      { companyName: 'Toyota', modelName: 'Fortuner', makingYear: 2021, color: 'Black', isElectric: false },
      { companyName: 'Tesla', modelName: 'AWD', makingYear: 2023, color: 'White', isElectric: true },
      { companyName: 'Ford', modelName: 'Mustang', makingYear: 2022, color: 'Blue', isElectric: false },
      { companyName: 'Tata', modelName: 'Harrier', makingYear: 2020, color: 'Black', isElectric: false }
    ];
  }
}
