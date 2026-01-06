import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {

  // --- 1. WEIGHT JOURNEY (Line Chart) ---
  public weightChartType: 'line' = 'line';
  public weightChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [78, 77, 76.5, 75, 74.2, 73.5], // Weight in kg
        label: 'Weight (kg)',
        fill: true, // Fill area under line
        tension: 0.4,
        borderColor: '#673AB7', // Deep Purple
        backgroundColor: 'rgba(103, 58, 183, 0.1)', // Light Purple transparent
        pointBackgroundColor: '#fff',
        pointBorderColor: '#673AB7',
        pointRadius: 5
      }
    ]
  };
  public weightChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { min: 70, max: 80, grid: { color: '#f0f0f0' } }, // Adjust min/max based on user
      x: { grid: { display: false } }
    }
  };

  // --- 2. CALORIES IN vs OUT (Bar Chart) ---
  public calChartType: 'bar' = 'bar';
  public calChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { data: [2100, 1900, 2300, 2000, 1800, 2500, 2200], label: 'Consumed', backgroundColor: '#F45C2C', borderRadius: 4 },
      { data: [2400, 2200, 2100, 2300, 2400, 2000, 1900], label: 'Burned', backgroundColor: '#4CAF50', borderRadius: 4 }
    ]
  };
  public calChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } }, // Show legend at bottom
    scales: {
      y: { beginAtZero: true, grid: { display: false } },
      x: { grid: { display: false } }
    }
  };

  // --- 3. WORKOUT SPLIT (Doughnut Chart) ---
  public workoutChartType: 'doughnut' = 'doughnut';
  public workoutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Cardio', 'Strength', 'Yoga'],
    datasets: [{
      data: [45, 30, 25], // Percentage
      backgroundColor: ['#2196F3', '#FFC107', '#E91E63'],
      borderWidth: 0,
      hoverOffset: 4
    }]
  };
  public workoutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: { legend: { position: 'right' } }
  };

}