import { Injectable } from '@angular/core';
// Peticiones Http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Obtenemos los usuarios
  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=1');
  }
}
