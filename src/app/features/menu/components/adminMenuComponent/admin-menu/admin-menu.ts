import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MenuItem } from '../../menuComponent/menu-item/menu-item';
import { DailyMenu } from '../../menuComponent/daily-menu/daily-menu';
import { MenuList } from '../../menuComponent/menu-list/menu-list';
import { AdminMenuServices } from '../../../services/adminMenuServices/admin-menu-services';
import { ActivatedRoute, Router } from '@angular/router';
import { addMenuItemDto } from '../../../models/addMenuItemDto';
import { MenuServices } from '../../../services/menuServices/menu-services';
import { menuItemDto } from '../models/MenuItemDto/menuItemDto';
import { AddItem } from "../add-item/add-item";

@Component({
  selector: 'app-admin-menu',
  imports: [ReactiveFormsModule, CommonModule, MenuItem, AddItem],
  templateUrl: './admin-menu.html',
  styleUrl: './admin-menu.css'
})
export class AdminMenu implements OnInit {

  addItemForm!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;
  products: menuItemDto[]= [];
  isAddModalOpen: boolean = false;
  isDailyMenu: boolean = false;
  constructor(
    private adminMenuService: AdminMenuServices,
    private menuService: MenuServices,
    private fb: FormBuilder,
    private router: Router,
    private route : ActivatedRoute,
    private formBuilder: FormBuilder
  ){
      this.addItemForm = this.formBuilder.group({
        name: [''],
        description: [''],
        price: [''],
        category: [''],
        ingredients: [''],
        imageUrl: ['']
    })
    }

    ngOnInit(): void {
    this.refreshMenuItems();
    }

    refreshMenuItems(): void {
      this.menuService.getAllMenuItems().subscribe({
        next: (response) => {
          console.log('Menu items fetched successfully:', response);
          this.products= response.data;
        },
        error: (error) => {
          this.errorMessage = 'Failed to fetch menu items. Please try again later.';
        }
      });
    }

    openAddModal() {
      this.isAddModalOpen = true;
    }

    closeAddModal() {
      this.isAddModalOpen = false;
      this.addItemForm.reset();
    }

    onDeleteItem(itemId: string): void{
      if(!confirm("Bu yemeği silmek istediğinize emin misiniz?")) {
        return;
    }
    this.isLoading=true;
      this.adminMenuService.deleteMenuItem(itemId).subscribe({
        next: (response) => {
          this.router.navigate(['/adminMenu']);
          
          console.log('Item deleted successfully:', response);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error deleting item:', error);
          this.errorMessage = 'Deleting item failed. Please check the data and try again.';
          this.isLoading = false;
        }
      });
    }

    onUpdateItem(): void {
      if (this.addItemForm.invalid) {
        this.isLoading = true;
        this.addItemForm.markAllAsTouched();
        return;
      }
      const itemId = this.route.snapshot.paramMap.get('id') || '';
      const updateItemDto : addMenuItemDto = Object.assign({}, this.addItemForm.value);
      this.adminMenuService.updateMenuItem(itemId, updateItemDto).subscribe({
        next: (response) => {
          this.router.navigate(['/admin-menu']);
          alert(`Item updated successfully: ${response}`);
          this.isLoading = false;
        },
        error: (error) =>{
          console.error('Error updating item:', error);
          this.errorMessage = 'Updating item failed. Please check the data and try again.';
          this.isLoading = false;
        }
      });
    }
  }
