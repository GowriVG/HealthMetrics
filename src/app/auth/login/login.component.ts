import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Optional: if you want to redirect later

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  // 1. toggle variable
  isLoginMode: boolean = true;

  // 2. Objects to bind to the HTML inputs
  registerObj: any = {
    fullname: '',
    username: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    username: '', // Using 'username' here to match your HTML label, usually mapped to email
    password: ''
  };

  constructor(private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // 3. REGISTER LOGIC: Save to Local Storage
  onRegister() {
    if(this.registerObj.email == '' || this.registerObj.password == '') {
      alert("Please fill all required fields");
      return;
    }

    // Check if user already exists (optional safety)
    const existingUser = localStorage.getItem('localUser');
    if(existingUser) {
      const user = JSON.parse(existingUser);
      if(user.email === this.registerObj.email) {
        alert("User already exists! Please login.");
        return;
      }
    }

    // Save data
    localStorage.setItem('localUser', JSON.stringify(this.registerObj));
    alert("Registration Success! Please Login.");
    
    // Switch to login view
    this.isLoginMode = true;
  }

  // 2. Inject the Router here
  // constructor(private router: Router) {}

  // 4. LOGIN LOGIC: Check Local Storage
  onLogin() {
    const localUser = localStorage.getItem('localUser');

    if (localUser != null) {
      const storedUser = JSON.parse(localUser);


      if (this.loginObj.username == storedUser.username && this.loginObj.password == storedUser.password) {
        alert("Login Success!");
        this.router.navigate(['/dashboard']); 
      } else {
        alert("Wrong credentials");
      }
    } else {
      alert("No user found. Please Register first.");
    }
  }
}