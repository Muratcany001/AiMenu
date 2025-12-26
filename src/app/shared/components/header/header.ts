import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router: Router) {}
  //TOKENI ISTEDIGIMZ YERDE CAGIRIP CAGIRDIGIMIZ YERDE ICERISINE REISEBILIYORUZ 
  isLoggedIn(): boolean{
    const token = localStorage.getItem('token');
    if(!token){ 
        return false;
      }
    const role : any = jwtDecode(token);
    return true;
  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/menuList']);
    console.log("cikis yapildi");
  }
}
