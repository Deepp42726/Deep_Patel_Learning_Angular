import { Component } from '@angular/core';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

@Component({
  selector: 'app-modify-car-list-item',
  standalone: true,
  imports: [
    PageNotFoundComponent
  ],
  templateUrl: './modify-car-list-item.component.html',
  styleUrl: './modify-car-list-item.component.css'
})
export class ModifyCarListItemComponent {

}
