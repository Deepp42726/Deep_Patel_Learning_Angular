import { Component, Input } from '@angular/core';
import { Car } from '../models/car';
import { NgIf, NgClass, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { FullCarNamePipe } from '../full-car-name.pipe';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    CurrencyPipe,
    UpperCasePipe,
    FullCarNamePipe,
    HoverHighlightDirective,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatButton,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css'],
})
export class CarListItemComponent {
  @Input() car!: Car;
  @Input() isOdd!: Boolean;
}
