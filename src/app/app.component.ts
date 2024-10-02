import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe, NgFor } from "@angular/common";
import {CarListComponent} from "./car-list/car-list.component";
import {carList} from "./data/mock-component";


@Component({

  imports: [RouterOutlet, NgFor, JsonPipe, CarListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'List of Cars';

  protected readonly carList = carList;
}
