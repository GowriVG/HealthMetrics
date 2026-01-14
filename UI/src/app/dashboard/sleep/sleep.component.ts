import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-sleep',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './sleep.component.html',
  styleUrl: './sleep.component.css'
})
export class SleepComponent {

  // --- 1. LEFT: SLEEP TRACKER (Dots/Bubbles) ---
  // We use a Line chart but hide the line to create the "Bubble" effect
  public sleepTrackerType: 'line' = 'line';

  public sleepTrackerData: ChartConfiguration<'line'>['data'] = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      data: [8.5, 6, 6, 7.2, 8, 5, 9.2], // Matching the dot heights
      label: 'Sleep',
      type: 'line',
      fill: false,
      showLine: false, // Hides the connecting line
      pointBackgroundColor: '#4527A0', // Dark Purple
      pointBorderColor: '#4527A0',
      pointRadius: 15, // Makes dots look like big bubbles
      pointHoverRadius: 17,
    }]
  };

  public sleepTrackerOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { 
        min: 2, max: 10, 
        grid: { color: '#f0f0f0' },
        ticks: { callback: (val) => val + ' hrs' }
      },
      x: { 
        grid: { display: false },
        offset: true // Centers the points in the column
      }
    }
  };


  // --- 2. RIGHT: SLEEP QUALITY (Semi-Circle Gauge) ---
  public qualityChartType: 'doughnut' = 'doughnut';

public qualityChartData: ChartConfiguration<'doughnut'>['data'] = {
  labels: ['Deep', 'Light', 'REM', 'Awake'],
  datasets: [{
    data: [30, 40, 20, 10], 
    backgroundColor: [
      '#311B92', // Deep 
      '#512DA8', // Light
      '#7E57C2', // REM
      '#D1C4E9'  // Awake
    ],
    // These 2 lines create the gaps between slices
    borderColor: '#ffffff',
    borderWidth: 2, 
  }]
};

  public qualityChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90,      // Start from left
    circumference: 180, // Draw only half circle
    cutout: '70%',
    plugins: { 
      legend: { display: false },
      tooltip: { enabled: false } // Disable tooltips for cleaner look
    }
  };

}