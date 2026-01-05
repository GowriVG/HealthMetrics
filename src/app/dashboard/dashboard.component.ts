import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  // Default name if no user is found
  loggedUser: string = 'Guest';

  // 3. This runs automatically when Dashboard loads
  ngOnInit() {
    const localUser = localStorage.getItem('localUser');
    
    if (localUser != null) {
      const user = JSON.parse(localUser);
      // We prioritize 'fullname', otherwise use 'username' or 'email'
      this.loggedUser = user.fullname || user.username || 'User'; 
    }
  }
}