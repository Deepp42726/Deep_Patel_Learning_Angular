import { Injectable } from '@angular/core';
import { carList } from '../data/mock-component';
import { Observable, of} from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = carList;

  constructor() {}

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  getCarById(carId: number): Observable<Car | undefined> {
    const car = this.cars.find(car => car.id === carId);
    return of(car);
  }

  addCar(newCar: Car): Observable<Car[]> {
    this.cars.push(newCar);
    return of(this.cars);
  }

  updateCar(updatedCar: Car): Observable<Car[]> {
    const index = this.cars.findIndex(car => updatedCar.id === car.id);
    if (index !== -1) {
      this.cars[index] = updatedCar;
    }
    return of(this.cars);
  }

  deleteCar(carId: number): Observable<Car[]> {
    this.cars = this.cars.filter(car => car.id !== carId);
    return of(this.cars);
  }

  generateNewID(): number {
return this.cars.length> 0 ? Math.max(...this.cars.map(car => car.id )) +1 : 1;
  }
}


