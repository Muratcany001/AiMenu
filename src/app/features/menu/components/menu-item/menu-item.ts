import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css'
})
export class MenuItem {

}
