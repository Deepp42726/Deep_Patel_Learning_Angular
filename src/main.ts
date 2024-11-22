import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CarListComponent } from './app/car-list/car-list.component';
import { CarListItemComponent } from './app/car-list-item/car-list-item.component';
import { ModifyCarListItemComponent } from './app/modify-car-list-item/modify-car-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id', component: CarListItemComponent },
  { path: 'modify-list-item', component: ModifyCarListItemComponent },
  { path: 'modify-list-item/:id', component: ModifyCarListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))
  ]
}).catch(err => console.error(err));
