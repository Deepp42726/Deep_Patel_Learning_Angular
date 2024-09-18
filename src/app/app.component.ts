import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe, NgFor } from "@angular/common";
import {Car} from "./car";


@Component({

  imports: [RouterOutlet , NgFor, JsonPipe ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'List of Cars';

  carList: Car[] = [
    { companyName: 'Toyota', modelName: 'Fortuner', makingYear: 2021, color: 'Black', isElectric: false },
    { companyName: 'Tesla', modelName: 'AWD', makingYear: 2023, color: 'White', isElectric: true },
    { companyName: 'Ford', modelName: 'Mustang', makingYear: 2022, color: 'Black', isElectric: false }
  ];
}
