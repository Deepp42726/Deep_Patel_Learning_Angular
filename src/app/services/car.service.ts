import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Car } from '../models/car';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { carList } from '../data/mock-component';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'api/cars';
  private cars: Car[] = carList;

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getCarById(carId: number): Observable<Car> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.get<Car>(url).pipe(catchError(this.handleError));
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${car.id}`, car);
  }

  deleteCar(carId: number): Observable<{}> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewID(): number {
    if (this.cars.length === 0) {
      return 1;
    } else {
      const maxId = Math.max(...this.cars.map(c => c.id));
      return maxId + 1;
    }
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
