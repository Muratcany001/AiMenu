import { Routes } from '@angular/router';
import { MenuItem } from './features/menu/components/menuComponent/menu-item/menu-item';
import { MenuList } from './features/menu/components/menuComponent/menu-list/menu-list';
import { Login } from './features/auth/components/login/login';
import { Register } from './features/auth/components/register/register';
import { DailyMenu } from './features/menu/components/menuComponent/daily-menu/daily-menu';
import { AdminMenu } from './features/menu/components/adminMenuComponent/admin-menu/admin-menu';
import { AddItem } from './features/menu/components/adminMenuComponent/add-item/add-item';
import { Orders } from './features/orders/components/orders/orders';
import { authGuard } from './core/guards/auth-guard';


export const routes: Routes = [

{
    path: 'menuItem',
    component:MenuItem
},
{
    path: 'menuList',
    component:MenuList
},
{
    path: 'login',
    component:Login
},
{
    path: 'register',
    component : Register
},
{
    path : 'dailyMenu',
    component:DailyMenu
},
{
    path : 'adminMenu',
    canActivate:[authGuard],
    component:AdminMenu
},
{
    path : 'addItem',
    component:AddItem
},
{
    path : 'orders',
    component:Orders
},
{
    path : '**',
    component:MenuList
}    
];
