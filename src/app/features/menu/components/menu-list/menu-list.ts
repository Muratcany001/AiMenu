import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuItem } from '../menu-item/menu-item';
import { DailyMenu } from '../daily-menu/daily-menu';

@Component({
  selector: 'app-menu-list',
  imports: [ReactiveFormsModule, MenuItem, DailyMenu],
  templateUrl: './menu-list.html'
})
export class MenuList {

}