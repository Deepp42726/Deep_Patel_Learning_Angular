import { Component, Input } from '@angular/core';
import { Car } from '../models/car';
import { NgClass, NgForOf, NgIf, CurrencyPipe } from '@angular/common';
import { FullCarNamePipe } from '../pipes/full-car-name.pipe';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass, CurrencyPipe, FullCarNamePipe],
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent {
  @Input() car!: Car;
  @Input() isOdd!: Boolean;
}
