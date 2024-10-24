import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {JsonPipe, NgFor, NgIf, NgOptimizedImage} from "@angular/common";
import { CarListComponent } from "./car-list/car-list.component";
import { CarService } from './services/car.service';
import { Car } from './models/car';
import {CarListItemComponent} from "./car-list-item/car-list-item.component";  // Corrected the type

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, JsonPipe, CarListComponent, RouterLinkActive, RouterLink, NgIf, CarListItemComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'List of Cars';

  selectedCar?: Car;
  carList: Car[] = [];
  selectedCarId = 2;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCarById(this.selectedCarId).subscribe(car => {
      this.selectedCar = car;
    });

    this.carService.getCars().subscribe(cars => {
      this.carList = cars;
    });
  }
}
