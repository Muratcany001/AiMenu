import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  standalone:true,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {

  registerForm!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;
  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private router : Router,
    private route : ActivatedRoute
  ) {

   }


  ngOnInit(): void {
  this.registerForm = this.fb.group({
    name:['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });
}
onRegister(): void {
  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }
this.isLoading = true;
this.errorMessage = '';
const registerData = Object.assign({}, this.registerForm.value);

this.authService.register(registerData).subscribe({
  next: (response) =>{
    console.log('kayit basarili');
    this.errorMessage= 'Kullanici kaydi basarili, ana sayfaya yonlendiriliyorsunuz';
    localStorage.setItem('token', response.token);
    this.isLoading = false;
    this.router.navigate(['/login'])
  },
  error: (err) =>{
    console.log("kayit islemi basarisiz");
    console.error(err);
    this.errorMessage= "kayit yapilamiyor, lutfen bilgilerinizi kontrol edin ve tekrar deneyin";
    this.isLoading=false;
  }
    
});

}
}
