import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for input binding

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  // Default User Data
  user = {
    fullname: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+91 98765 43210',
    age: 24,
    gender: 'Male',
    height: 175, // cm
    weight: 73.5, // kg
    activityLevel: 'Moderate'
  };

  isEditing: boolean = false;

  ngOnInit() {
    // 1. Load data from Local Storage if available
    const localUser = localStorage.getItem('localUser');
    if (localUser) {
      const parsed = JSON.parse(localUser);
      // Merge local storage data with our structure
      this.user.fullname = parsed.fullname || this.user.fullname;
      this.user.email = parsed.email || this.user.email;
      // You can expand this if you save more fields during registration
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveProfile() {
    this.isEditing = false;
    alert('Profile Updated Successfully!');
    // In a real app, you would send this.user to your backend API here
  }
}