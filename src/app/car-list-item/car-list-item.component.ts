import { Component , Input } from '@angular/core';
import { Car } from '../models/car';
import {NgClass, NgForOf, NgIf} from '@angular/common';



@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})

export class CarListItemComponent {
 @Input() car!: Car;
 @Input() isOdd!: Boolean;

 @Input() console!: Car | undefined;


}
