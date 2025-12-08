import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../models/loginDto';
import { RegisterDto } from '../models/registerDto';
import { UpdatePasswordDto } from '../models/updatePasswordDto';
import { userDto } from '../models/userDto';
import { updateUserDto } from '../models/updateUserDto';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + 'users/';
  
  constructor(private http: HttpClient) { }

  login(loginDto: LoginDto): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login', loginDto);
  }
  register(registerDto: RegisterDto): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'createUser', registerDto);
  }
}
