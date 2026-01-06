import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  // Settings State
  settings = {
    emailNotifications: true,
    smsNotifications: false,
    darkMode: false,
    publicProfile: true,
    twoFactorAuth: false
  };

  // Mock functions for buttons
  changePassword() {
    alert('Password change email sent!');
  }

  deleteAccount() {
    if(confirm('Are you sure you want to delete your account? This cannot be undone.')) {
      alert('Account marked for deletion.');
    }
  }

  saveSettings() {
    // Here you would call your backend API
    console.log('Settings Saved:', this.settings);
    alert('Settings Saved Successfully');
  }
}