import {Component, OnInit} from '@angular/core';
import { NgForOf } from '@angular/common';
import { Car } from '../models/car';
import { CarListItemComponent } from "../car-list-item/car-list-item.component";
import { CarService } from '../services/car.service';
import {Router, RouterLink} from "@angular/router";

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
error: string | null = null;
  constructor(private carService: CarService , private router: Router) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe({
      complete: () => console.log("Car data fetch complete!"),
      error: err => console.error("Error fetching cars", err),
      next: (data: Car[]) => this.carList = data
    })

  }
  selectedCar?: Car;
  selectCar(car: Car): void {
    this.selectedCar = car;
  }
  editCar(car: Car): void {
    this.router.navigate(['/cars', car.id , 'edit']);
  }
  deleteCar(carID: number): void {
    this.carService.deleteCar(carID).subscribe(() => {
      this.carList = this.carList.filter(car => car.id !== carID);
    });
    }

}
