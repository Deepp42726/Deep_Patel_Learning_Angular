import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf, CurrencyPipe } from '@angular/common';
import { Car } from '../models/car';
import { CarListItemComponent } from "../car-list-item/car-list-item.component";
import { CarService } from '../services/car.service';
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CarDescriptionPipe } from '../pipes/car-description.pipe';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    NgForOf,
    CarListItemComponent,
    RouterLink,
    FormsModule,
    NgIf,
    CurrencyPipe,
    CarDescriptionPipe
  ],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'year', 'price'];
  carList: Car[] = [];
  error: string | null = null;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit() {
    this.carService.getCars().subscribe({
      next: (data: Car[]) => this.carList = data,
      error: err => {
        this.error = 'Error fetching cars';
        console.error("Error fetching cars", err);
      },
      complete: () => console.log("Car data fetch complete!")
    });
  }

  selectedCar?: Car;
  selectCar(car: Car): void {
    this.selectedCar = car;
  }

  editCar(car: Car): void {
    this.router.navigate(['/cars', car.id, 'Edit']);
  }

  deleteCar(carID: number): void {
    this.carService.deleteCar(carID).subscribe(() => {
      this.carList = this.carList.filter(car => car.id !== carID);
    });
  }
}
