import { Routes } from '@angular/router';
import { MenuItem } from './features/menu/components/menu-item/menu-item';
import { MenuList } from './features/menu/components/menu-list/menu-list';
import { Login } from './features/auth/components/login/login';
import { Register } from './features/auth/components/register/register';
import { DailyMenu } from './features/menu/components/daily-menu/daily-menu';
import { AdminMenu } from './features/menu/components/admin-menu/admin-menu';


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
    component:AdminMenu
},
{
    path : '**',
    component:MenuList
}








    
];
