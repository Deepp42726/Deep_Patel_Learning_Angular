import { Routes } from '@angular/router';
import {ModifyCarListItemComponent} from "./modify-car-list-item/modify-car-list-item.component";
import {CarListComponent} from "./car-list/car-list.component";

export const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id/edit', component: ModifyCarListItemComponent }
];
