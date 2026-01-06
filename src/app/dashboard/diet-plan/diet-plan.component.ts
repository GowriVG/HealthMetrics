import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diet-plan.component.html',
  styleUrl: './diet-plan.component.css'
})
export class DietPlanComponent {

  selectedDay: string = 'Monday';
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Mock Data for the Plan
  // In a real app, this would come from a database
  // Updated Mock Data with Working Images
  allMeals: any = {
    'Monday': [
      { 
        type: 'Breakfast', 
        name: 'Avocado Toast & Egg', 
        cal: 450, 
        time: '8:00 AM', 
        img: '  https://images.unsplash.com/photo-1525351484163-7529414395d8?w=500&q=80' 
      },
      {   
        type: 'Lunch', 
        name: 'Grilled Chicken Salad', 
        cal: 600, 
        time: '1:00 PM', 
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80' 
      },
      { 
        type: 'Snack', 
        name: 'Greek Yogurt & Berries', 
        cal: 150, 
        time: '4:30 PM', 
        img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=80' 
      },
      { 
        type: 'Dinner', 
        name: 'Salmon with Asparagus', 
        cal: 500, 
        time: '7:30 PM', 
        img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&q=80' 
      }
    ],
    'Tuesday': [
      { 
        type: 'Breakfast', 
        name: 'Oatmeal with Honey', 
        cal: 350, 
        time: '8:00 AM', 
        img: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=200&q=80' 
      },
      { 
        type: 'Lunch', 
        name: 'Quinoa & Veggie Bowl', 
        cal: 550, 
        time: '1:00 PM', 
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80' 
      },
      { 
        type: 'Snack', 
        name: 'Apple & Peanut Butter', 
        cal: 200, 
        time: '4:30 PM', 
        img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80' 
      },
      { 
        type: 'Dinner', 
        name: 'Turkey Stir Fry', 
        cal: 480, 
        time: '7:30 PM', 
        img: 'https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=200&q=80' 
      }
    ]
  };

  // Get current meals based on selection
  get currentMeals() {
    return this.allMeals[this.selectedDay] || this.allMeals['Monday']; // Fallback to Mon
  }

  selectDay(day: string) {
    this.selectedDay = day;
  }
}