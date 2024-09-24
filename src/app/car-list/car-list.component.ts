import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  displayedColumns: string[] = ['companyName', 'modelName', 'makingYear', 'color', 'isElectric'];

  carList: Car[] = [
    { companyName: 'Toyota', modelName: 'Fortuner', makingYear: 2021, color: 'Black', isElectric: false },
    { companyName: 'Tesla', modelName: 'AWD', makingYear: 2023, color: 'White', isElectric: true },
    { companyName: 'Ford', modelName: 'Mustang', makingYear: 2022, color: 'Blue', isElectric: false },
    { companyName: 'Tata', modelName: 'Harrier', makingYear: 2020, color: 'Black', isElectric: false }
  ];
}
