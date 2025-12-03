import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-menu-item',
  imports: [ReactiveFormsModule],
  templateUrl: './menu-item.html',
})
export class MenuItem {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
