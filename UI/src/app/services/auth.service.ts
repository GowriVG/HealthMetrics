import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL of your running .NET API
  private baseUrl = 'https://localhost:7282/api/Auth'; 

  constructor(private http: HttpClient, private router: Router) { }

  register(userObj: any) {
    // expecting text response based on your C# code
    return this.http.post(`${this.baseUrl}/register`, userObj, { responseType: 'text' });
  }

  login(loginObj: any) {
    // expecting text response based on your C# code
    return this.http.post(`${this.baseUrl}/login`, loginObj, { responseType: 'text' });
  }

  // We need this to get user details after login
  getLoggedUser() {
    return this.http.get(`${this.baseUrl}/user`);
  }

  logout() {
    localStorage.removeItem('localUser');
    this.http.post(`${this.baseUrl}/logout`, {}).subscribe();
    this.router.navigate(['/login']);
  }
}