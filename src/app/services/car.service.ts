import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { carList } from '../data/mock-component';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'api/cars';
  private cars: Car[] = carList;

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getCarById(carId: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${carId}`);
  }

  addCar(newCar: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, newCar);
  }

  updateCar(updatedCar: Car): Observable<Car | undefined> {
    const url = `${this.apiUrl}/${updatedCar.id}`;
    return this.http.put<Car>(url, updatedCar);
  }

  deleteCar(carId: number): Observable<{}> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.delete(url);
  }

  generateNewID(): number {
    return this.cars.length > 0 ? Math.max(...this.cars.map(car => car.id)) + 1 : 1;
  }
}
