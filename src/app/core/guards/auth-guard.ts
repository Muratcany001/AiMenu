import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  if(!token) return false;

  const role : any = jwtDecode(token);
  
  if(role === 'Admin') {
    router.navigate(['/adminMenu']);
    console.log("123");
    return true;
  }
  else{
  router.navigate(['/'], { queryParams: { returnUrl: state.url } });
  console.log('Yetkiniz yok');
  alert('yetkiniz yok');
  return false;
  }

};
