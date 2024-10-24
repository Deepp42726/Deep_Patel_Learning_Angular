import {Component, OnInit} from '@angular/core';
import { NgForOf } from '@angular/common';
import { Car } from '../models/car';
import { CarListItemComponent } from "../car-list-item/car-list-item.component";
import { CarService } from '../services/car.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgForOf, CarListItemComponent, RouterLink],

  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'make', 'model', 'year' , 'price'];
  carList: Car[] = [];
  constructor(private carService: CarService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.carService.getCars().subscribe({
      complete: () => console.log("Car data fetch complete!"),
      error: err => console.error("Error fetching cars", err),
      next: (data: Car[]) => this.carList = data
    });
  }
}
