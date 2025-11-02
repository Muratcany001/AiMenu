import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuItem } from '../menu-item/menu-item';

@Component({
  selector: 'app-orders',
  imports: [ReactiveFormsModule,MenuItem],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {

}
