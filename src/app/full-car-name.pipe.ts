import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullCarName',
  standalone: true
})
export class FullCarNamePipe implements PipeTransform {

  transform(companyName: string, modelName: string): String {
    return `${companyName} ${modelName}`;  }

}
