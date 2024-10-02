import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgForOf],

  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  carList: Car[] = [];

  constructor(private carService: CarService) {
    this.carList = this.carService.getCars();
  }
}
