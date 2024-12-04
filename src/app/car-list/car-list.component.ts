import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForOf, NgIf, CurrencyPipe } from '@angular/common';
import { Car } from '../models/car';
import { CarListItemComponent } from "../car-list-item/car-list-item.component";
import { CarService } from '../services/car.service';
import { Router, RouterLink } from "@angular/router";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    NgForOf,
    CarListItemComponent,
    RouterLink,
    MatTable,
    MatPaginator,
    MatSort,
    NgIf,
    CurrencyPipe,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatButton,
  ],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'year', 'price'];
  carList: Car[] = [];
  dataSource: MatTableDataSource<Car> = new MatTableDataSource(this.carList);
  error: string | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit() {
    this.carService.getCars().subscribe({
      next: (data: Car[]) => {
        this.carList = data;
        this.dataSource.data = data;
        this.error = null;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
        if (this.sort) {
          this.dataSource.sort = this.sort;
        }
      },
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
    this.router.navigate(['/modify-list-item', car.id]);
  }

  deleteCar(carID: number): void {
    this.carService.deleteCar(carID).subscribe(() => {
      this.carList = this.carList.filter(car => car.id !== carID);
      this.dataSource.data = this.carList;
    });
  }
}
