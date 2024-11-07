import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
    imports: [
        RouterLink,
        ReactiveFormsModule
    ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {



}
