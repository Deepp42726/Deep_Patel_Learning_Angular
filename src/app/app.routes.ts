import { Routes } from '@angular/router';
import {ModifyCarListItemComponent} from "./modify-car-list-item/modify-car-list-item.component";
import {CarListComponent} from "./car-list/car-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'modify-list-item/:id', component: ModifyCarListItemComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];
