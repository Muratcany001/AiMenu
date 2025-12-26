import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router: Router) {}

  isLoggedIn(): boolean{
    const token = localStorage.getItem('authToken');
    const role  = localStorage.getItem('role')
    return !!token;
  }
  onLogout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    this.router.navigate(['/menuList']);
    console.log("cikis yapildi");

  }
}
