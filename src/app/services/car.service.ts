import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car , carList } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Observable<carList> {
    return of(carList);
  }
}
