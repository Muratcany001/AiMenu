import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServices {
  private apiUrl = environment.apiUrl + 'menuItems/';
    constructor(private http: HttpClient) { }

    getAllMenuItems(): Observable<any> {
        return this.http.get<any>(this.apiUrl + 'getAllMenuItems');
    }
    getMenuItemById(id: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}getMenuItemById/${id}`);
    }
    getMenuItemByCategory(category:string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}getMenuItemByCategory/${category}`)
    }
    getMenuItemsByName(name: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}getMenuItemsByName/${name}`);
    }
    getMenuItemByIngeredients(ingeredents:string): Observable<any>{
      return this.http.get<any>(`${this.apiUrl}getMenuItemByIngeredients/${ingeredents}`);
    }
    
}
