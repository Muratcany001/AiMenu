import { Component } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MenuItem } from '../../menuComponent/menu-item/menu-item';
import { DailyMenu } from '../../menuComponent/daily-menu/daily-menu';
import { MenuList } from '../../menuComponent/menu-list/menu-list';

@Component({
  selector: 'app-admin-menu',
  imports: [ReactiveFormsModule,CommonModule,MenuItem,DailyMenu],
  templateUrl: './admin-menu.html',
  styleUrl: './admin-menu.css'
})
export class AdminMenu {

}
