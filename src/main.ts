import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ModifyCarListItemComponent } from './app/modify-car-list-item/modify-car-list-item.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', loadComponent: () => import('./app/car-list/car-list.component').then(m => m.CarListComponent) },
  { path: 'modify-list-item', component: ModifyCarListItemComponent },
  { path: 'modify-list-item', loadComponent: () => import('./app/modify-car-list-item/modify-car-list-item.component').then(m => m.ModifyCarListItemComponent) },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })),
    MatTableModule,
    MatButtonModule,
    MatIconModule, provideAnimationsAsync()
  ]
}).catch(err => console.error(err));
