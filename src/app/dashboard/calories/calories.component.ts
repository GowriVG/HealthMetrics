import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-calories',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './calories.component.html',
  styleUrl: './calories.component.css'
})
export class CaloriesComponent {

  // --- CHART CONFIG ---
  public lineChartType: 'line' = 'line';
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      data: [1200, 1800, 2800, 1900, 2500, 1600, 1300],
      label: 'Calories',
      fill: false,
      tension: 0.4,
      borderColor: '#F45C2C',
      backgroundColor: '#F45C2C',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#F45C2C',
      borderWidth: 2
    }]
  };
  
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: '#f0f0f0' } },
      x: { grid: { display: false } }
    }
  };

  // --- MEAL LOGIC (Required for Right Panel) ---
  selectedMeal: string = 'Breakfast';
  
  currentNutrients: any = {
    calories: 1200, fat: '30g', carbs: '150g', protein: '50g', 
    fibre: '40g', calcium: '220g', vitamins: '60g'
  };

  mealData: any = {
    'Breakfast': { calories: 450, fat: '12g', carbs: '60g', protein: '20g', fibre: '10g', calcium: '150mg', vitamins: '30%' },
    'Lunch':     { calories: 600, fat: '25g', carbs: '80g', protein: '35g', fibre: '15g', calcium: '50mg', vitamins: '20%' },
    'Dinner':    { calories: 350, fat: '10g', carbs: '40g', protein: '30g', fibre: '12g', calcium: '20mg', vitamins: '10%' },
    'Snack':     { calories: 150, fat: '5g', carbs: '20g', protein: '5g', fibre: '5g', calcium: '10mg', vitamins: '5%' }
  };

  selectMeal(meal: string) {
    this.selectedMeal = meal;
    this.currentNutrients = this.mealData[meal];
  }
}