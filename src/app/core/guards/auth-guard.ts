import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
 //TOKENI KULLANMAK ICIN BURADA CEKIYORUZ
  const token = localStorage.getItem('token');
  if(!token) return false;
  // BURADA DECODE ETTIK ICERISINI GOREBILIYORUZ
  const decodedToken : any = jwtDecode(token);
  //BURADA DA ROL KONTROLU
  if(decodedToken.role === 'Admin') {
    return true;
  }
  else{
  return false;
  }

};
