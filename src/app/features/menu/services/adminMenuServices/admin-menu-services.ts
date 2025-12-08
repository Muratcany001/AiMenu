import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { addMenuItemDto } from '../../models/addMenuItemDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMenuServices {
  private apiUrl = environment.apiUrl + 'menuItems/';
  constructor(private http: HttpClient) { }
  
  addMenuItem(addMenuItemDto: addMenuItemDto) : Observable<any> {
    return this.http.post<any>(this.apiUrl + 'addMenuItem', addMenuItemDto);
  }
  updateMenuItem(id: string, updateMenuItemDto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}updateMenuItem/${id}`, updateMenuItemDto);
  }
  deleteMenuItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}deleteMenuItem/${id}`);
  }
}
