import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from '../models/car';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): { cars: Car[] } {
    const cars: Car[] = [
      { id: 1, companyName: 'Toyota', modelName: 'Fortuner', makingYear: 2021, color: 'Black', isElectric: false },
      { id: 2, companyName: 'Tesla', modelName: 'AWD', makingYear: 2023, color: 'White', isElectric: true },
      { id: 3, companyName: 'Ford', modelName: 'Mustang', makingYear: 2022, color: 'Blue', isElectric: false },
      { id: 4, companyName: 'Tata', modelName: 'Harrier', makingYear: 2020, color: 'Black', isElectric: false }
    ];
    return { cars };
  }
}
