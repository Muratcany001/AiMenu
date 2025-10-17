import { Routes } from '@angular/router';
import { MenuItem } from './features/menu/components/menu-item/menu-item';
import { MenuList } from './features/menu/components/menu-list/menu-list';
import { Login } from './features/auth/components/login/login';
import { Register } from './features/auth/components/register/register';


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
    path : '**',
    component:MenuList
}








    
];
