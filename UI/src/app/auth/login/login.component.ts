import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Ensure this is imported

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginMode: boolean = true;

  // Matches your C# RegisterRequest
  registerObj: any = {
    username: '', 
    email: '',
    password: ''
    // fullname is not in your C# RegisterRequest, so we can ignore it or add it later
  };

  // Matches your C# LoginRequest
  loginObj: any = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // --- CONNECTED REGISTER LOGIC ---
  onRegister() {
    if(this.registerObj.username == '' || this.registerObj.password == '') {
      alert("Please fill all required fields");
      return;
    }

    this.authService.register(this.registerObj).subscribe({
      next: (res) => {
        // C# returns "Registration successful"
        alert(res); 
        this.isLoginMode = true; // Switch to login screen
      },
      error: (err) => {
        console.error(err);
        alert(err.error || "Registration Failed");
      }
    });
  }

  // --- CONNECTED LOGIN LOGIC ---
  onLogin() {
    if(this.loginObj.username == '' || this.loginObj.password == '') {
      alert("Please enter username and password");
      return;
    }

    // Step 1: Attempt Login
    this.authService.login(this.loginObj).subscribe({
      next: (res) => {
        // Login Success! 
        // Now Step 2: Fetch the user details from the backend
        this.fetchUserDetails();
      },
      error: (err) => {
        console.error(err);
        alert("Invalid Credentials or Server Error");
      }
    });
  }

  fetchUserDetails() {
    this.authService.getLoggedUser().subscribe({
      next: (user: any) => {
        // Save the real user data from database to local storage
        // This allows the Dashboard to display "Hi, [Username]"
        localStorage.setItem('localUser', JSON.stringify(user));
        
        alert("Login Success!");
        this.router.navigate(['/dashboard/calories']);
      },
      error: (err) => {
        console.log("Could not fetch user details");
      }
    });
  }
}