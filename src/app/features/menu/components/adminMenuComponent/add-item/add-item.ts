import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { addMenuItemDto } from '../../../models/addMenuItemDto';
import { AdminMenuServices } from '../../../services/adminMenuServices/admin-menu-services';
import { MenuServices } from '../../../services/menuServices/menu-services';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css'
})
export class AddItem{
  addItemForm!: FormGroup;
  errorMessage: string = ''
  isLoading: boolean = false;
  isDailyMenu: boolean = false;
  constructor(
    private menuService: MenuServices,
    private adminMenuService: AdminMenuServices,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.addItemForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      category: [''],
      ingeredents: [''],
      imageUrl: ['']
    })
  }

  addToDailyMenu(): void {
    this.onAddItem();
  }

  onAddItem(): void {
      if (this.addItemForm.invalid) {
        this.addItemForm.markAllAsTouched();
        this.isLoading = false;
        return;
      }
      const newItem : addMenuItemDto = Object.assign({}, this.addItemForm.value);

      this.adminMenuService.addMenuItem(newItem).subscribe({
        next: (response) => {
          console.log('Item added successfully:', response);
          this.isLoading = false;
          alert('Yemek başarıyla eklendi');
          this.router.navigate(['/adminMenu']);
        },
        error: (error) => {
          console.error('Add item error:', error);
          this.errorMessage = 'Adding item failed. Please check the data and try again.';
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
      const updatedItem : addMenuItemDto = Object.assign({}, this.addItemForm.value);
      const itemId = this.route.snapshot.paramMap.get('id') || '';

      this.adminMenuService.updateMenuItem(itemId, updatedItem).subscribe({
        next: (response) => {
          this.router.navigate(['/admin-menu']);
          console.log('Item updated successfully:', response);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error updating item:', error);
          this.errorMessage = 'Updating item failed. Please check the data and try again.';
          this.isLoading = false;
        }
      });
    }
  }