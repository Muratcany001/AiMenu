import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MenuItem } from '../menu-item/menu-item';
import { DailyMenu } from '../daily-menu/daily-menu';
import { MenuServices } from '../../../services/menuServices/menu-services';
import { ActivatedRoute, Router } from '@angular/router';
import { menuItemDto } from '../../adminMenuComponent/models/MenuItemDto/menuItemDto';

@Component({
  selector: 'app-menu-list',
  imports: [ReactiveFormsModule, MenuItem, DailyMenu],
  templateUrl: './menu-list.html'
})
export class MenuList implements OnInit {
  isModalOpen = false;
  isLoading: boolean = false;
  menuListForm!: FormGroup;
  errorMessage: string = '';
  products: menuItemDto[]= [];
  constructor(
    private menuService: MenuServices,
    private formBuilder: FormBuilder,
    private router : Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.menuListForm = this.fb.group({
      Name: [''],
      Description: [''],
      Price: [''],
      Category: [''],
      Ingredients: [''],
      ImageUrl: ['']
    });


  }
  ngOnInit(): void {
    this.menuService.getAllMenuItems().subscribe({
      next: (response) => {
        console.log('Menu items fetched successfully:', response);
        this.products = response.data;
        console.log('veri tabanindan cekilen urunler',this.products);
      },
      error: (error) => {
        this.errorMessage = 'Failed to fetch menu items. Please try again later.';
      }
    });
  }
  getMenuItemsByCategory(category: string) {
    this.isLoading = true;
    this.menuService.getMenuItemByCategory(category).subscribe({
      next: (response) => {
        console.log(`Menu items for category ${category} fetched successfully:`, response);
      },
      error: (error) => {
        this.errorMessage = `Failed to fetch menu items for category ${category}. Please try again later.`;
      }});
    }
    getMenuItemById(id:string){
      this.isLoading = true;
      this.menuService.getMenuItemById(id).subscribe({
        next: (response) => {
          console.log('Menu items fetched succesfully:', response);
        },
        error: (error) => {
          this.errorMessage = 'Failed to fetch menu items.';
        }
      })
    }
}