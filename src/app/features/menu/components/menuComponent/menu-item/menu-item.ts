import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MenuServices } from '../../../services/menuServices/menu-services';
import { menuItemDto } from '../../adminMenuComponent/models/MenuItemDto/menuItemDto';


@Component({
  selector: 'app-menu-item',
  imports: [ReactiveFormsModule],
  templateUrl: './menu-item.html',
})
export class MenuItem implements OnInit{
  isModalOpen = false;
  menuItemForm! :FormGroup;
  errorMessage: string = ''

  constructor(
    private menuService: MenuServices,
    private formBuilder: FormBuilder,
    private fb: FormBuilder
  ) {
  }
  @Input() product!: menuItemDto;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  ngOnInit(): void {}
}
