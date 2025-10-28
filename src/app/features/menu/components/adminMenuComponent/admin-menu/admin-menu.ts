import { Component } from '@angular/core';
import { DailyMenu } from "../../daily-menu/daily-menu";
import { MenuList } from "../../menu-list/menu-list";
import { MenuItem } from "../../menu-item/menu-item";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-admin-menu',
  imports: [DailyMenu, MenuItem, ReactiveFormsModule,CommonModule],
  templateUrl: './admin-menu.html',
  styleUrl: './admin-menu.css'
})
export class AdminMenu {

}
