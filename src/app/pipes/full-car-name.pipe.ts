import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'fullCarName',
  standalone: true
})
export class FullCarNamePipe implements PipeTransform {

  transform(car: Car): string {
    return `${car.makingYear} ${car.modelName}`;
  }
}
