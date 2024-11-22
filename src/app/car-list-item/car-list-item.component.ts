import { Component, Input } from '@angular/core';
import { Car } from '../models/car';
import {
  NgClass,
  NgForOf,
  NgIf,
  CurrencyPipe,
  DatePipe,
  UpperCasePipe,
  SlicePipe,
  TitleCasePipe,
  LowerCasePipe
} from '@angular/common';
import {carList} from "../data/mock-component";
import {FullCarNamePipe} from "../full-car-name.pipe";

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass, CurrencyPipe, DatePipe, UpperCasePipe, SlicePipe, TitleCasePipe, LowerCasePipe, FullCarNamePipe],
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent {
  @Input() car!: Car;
  @Input() isOdd!: Boolean;
  protected readonly carList = carList;
}
