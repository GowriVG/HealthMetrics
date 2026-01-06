import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {

  // --- BAR CHART CONFIG ---
  public barChartType: 'bar' = 'bar';

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      data: [8800, 7100, 9200, 6100, 6900, 7900, 5400],
      label: 'Steps',
      backgroundColor: '#32CD32', // Lime Green color
      hoverBackgroundColor: '#228B22', // Darker green on hover
      borderRadius: 5, // Rounded corners on top
      barThickness: 30
    }]
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { 
        beginAtZero: true, 
        grid: { 
          color: '#f0f0f0',
          tickLength: 10 
        },
        border: { dash: [5, 5] } // Dashed grid lines
      },
      x: { 
        grid: { display: false } // No vertical grid lines
      }
    }
  };

  // --- RIGHT PANEL DATA ---
  stepsActivity = {
    caloriesBurnt: 1800,
    totalSteps: 2869,
    exerciseMin: 21,
    activeHours: 5
  };
}