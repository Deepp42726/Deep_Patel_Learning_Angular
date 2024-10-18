import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CarListComponent } from './app/car-list/car-list.component';
import {provideRouter, Routes} from '@angular/router';
import {CarListItemComponent} from "./app/car-list-item/car-list-item.component";
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ModifyCarListItemComponent } from './app/modify-car-list-item/modify-car-list-item.component';
import {appConfig} from "./app/app.config";

const routes: Routes =[
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id', component: CarListItemComponent },
  { path: 'modify-car/:id', component: ModifyCarListItemComponent },
  { path: '**', component: PageNotFoundComponent }
]

bootstrapApplication(AppComponent , appConfig)
  .catch(err => console.error(err))

bootstrapApplication(AppComponent,  {
  providers: [provideRouter(routes)]
});
