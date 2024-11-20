import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Car } from '../models/car';
import { carList } from '../data/mock-component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

  addCar(newCar: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, newCar).pipe(catchError(this.handleError));
  }



  updateCar(updatedCar: Car): Observable<Car> {
    const url = `${this.apiUrl}/${updatedCar.id}`;
    return this.http.put<Car>(url, updatedCar).pipe(catchError(this.handleError));
  }

  deleteCar(carId: number): Observable<{}> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private generateNewID(): number {
    if (this.cars && this.cars.length > 0) {
      return Math.max(...this.cars.map(car => car.id)) + 1;
    }
    return 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
