import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDto } from '../../models/loginDto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  standalone:true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login  {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;
  
  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    private fb : FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onLogin(): void {
  if (this.loginForm.invalid) {
    this.isLoading = true;
    this.loginForm.markAllAsTouched();
    return;
  }

  const userData : LoginDto = Object.assign({}, this.loginForm.value);

  this.authService.login(userData).subscribe({
    next: (response) => {
      localStorage.setItem('token', response.token);
      
  
      if(token.role=='Admin'){
        this.router.navigate(['/adminMenu'])
      }
      else{
      console.log("yetkiniz yok")
      this.router.navigate(['/menu'])
      }
      this.isLoading = false;
    },
    error: (error) => {
      this.errorMessage = 'E posta veya sifreniz yanlis. Lutfen bilgilerinizi kontrol edin ve tekrar deneyin.';
      console.log('Login error:', error);
      this.isLoading = false;
    }
  });
}
  decodeToken(token: string): any {
  try{
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch (e) {
    return null;
  }
  }
}
