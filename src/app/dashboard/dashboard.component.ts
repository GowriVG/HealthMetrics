import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd} from '@angular/router'; // Import RouterModule
import { filter } from 'rxjs/operators';

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

  // Flag to control visibility
  isOverviewPage: boolean = true;

  // Inject Router here
  constructor(private router: Router) {
    // Listen to route changes automatically
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.checkUrl(event.url);
    });
  }

  // 3. This runs automatically when Dashboard loads
  ngOnInit() {
    // Check URL when page first loads
    this.checkUrl(this.router.url);

    const localUser = localStorage.getItem('localUser');
    if (localUser != null) {
      const user = JSON.parse(localUser);
      // We prioritize 'fullname', otherwise use 'username' or 'email'
      this.loggedUser = user.fullname || user.username || 'User'; 
    }
  }

  // Logic to decide if we show the Header/Cards
  checkUrl(url: string) {

  // Pages where header + cards SHOULD be visible
  const overviewPages = [
    '/dashboard',
    '/dashboard/calories',
    '/dashboard/steps',
    '/dashboard/water',
    '/dashboard/sleep'
  ];

  // Pages where header + cards should be HIDDEN
  const hiddenPages = [
    '/dashboard/diet-plan',
    '/dashboard/statistics',
    '/dashboard/profile',
    '/dashboard/settings'
  ];

  // If current URL is in hidden pages → hide header
  if (hiddenPages.some(path => url.startsWith(path))) {
    this.isOverviewPage = false;
    return;
  }

  // Otherwise show header only for overview pages
  this.isOverviewPage = overviewPages.some(path => url === path);
}

// --- LOGOUT LOGIC ---
  onLogout() {
    // 1. Remove user data from storage
    localStorage.removeItem('localUser');
    
    // 2. Navigate back to Login
    this.router.navigate(['/login']);
  }

}