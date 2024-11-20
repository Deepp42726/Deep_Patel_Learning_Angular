import { Pipe, PipeTransform } from '@angular/core';
import {Car} from "../car";

@Pipe({
  name: 'carDescription',
  standalone: true
})
export class CarDescriptionPipe implements PipeTransform {

  transform(car: Car): string {

    return `${car.modelName} - ${car.isElectric ? 'Electric' : 'Petrol'}`;
  }

}
