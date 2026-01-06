import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-water',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './water.component.html',
  styleUrl: './water.component.css'
})
export class WaterComponent {

  // 1. Get Access to the Chart
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // --- LEFT CHART (Line) ---
  public lineChartType: 'line' = 'line';
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      data: [5, 6, 4.5, 5.5, 7.2, 5, 6],
      label: 'Water',
      fill: false,
      tension: 0.4,
      borderColor: '#1E88E5',
      backgroundColor: '#1E88E5',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#1E88E5',
      borderWidth: 3
    }]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { min: 2, max: 10, grid: { color: '#f0f0f0' } },
      x: { grid: { display: false } }
    }
  };

  // --- RIGHT CHART (Polar Area) ---
  public polarChartType: 'polarArea' = 'polarArea';
  
  // 2. Keep a local copy of the data numbers
  // (Order: 00:00, 03:00, 06:00, 09:00, 12:00, 15:00, 18:00, 21:00)
  public polarValues: number[] = [2, 3, 1.5, 2, 4, 3, 5, 2.5];

  public polarChartData: ChartConfiguration<'polarArea'>['data'] = {
    labels: ['00:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00', '21:00'],
    datasets: [{
      data: this.polarValues, // Initial binding
      backgroundColor: [
        'rgba(30, 136, 229, 0.2)', 'rgba(30, 136, 229, 0.3)',
        'rgba(30, 136, 229, 0.4)', 'rgba(30, 136, 229, 0.5)',
        'rgba(30, 136, 229, 0.8)', 'rgba(30, 136, 229, 0.6)',
        'rgba(30, 136, 229, 0.4)', 'rgba(30, 136, 229, 0.2)'
      ],
      borderWidth: 0,
    }]
  };

  public polarChartOptions: ChartOptions<'polarArea'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      r: {
        grid: { color: '#e0e0e0' },
        ticks: { display: true, z: 1, backdropColor: 'transparent' },
        pointLabels: { display: true, font: { size: 10 }, color: '#666' }
      }
    }
  };

  // --- INTERACTIVE LOGIC ---
  selectedIntake: string = '50ml';

  selectIntake(amount: string) {
    this.selectedIntake = amount;

    // 1. Determine Amount to Add
    let addValue = 0;
    if (amount === '50ml') addValue = 0.5;
    if (amount === '100ml') addValue = 1.0;
    if (amount === '200ml') addValue = 2.0;
    if (amount === '300ml') addValue = 3.0;

    // 2. Select specific slice to update (Index 5 = 15:00)
    const targetIndex = 5;

    // 3. Update the local number array
    this.polarValues[targetIndex] += addValue;

    // 4. THE FIX: Create a completely new object structure
    // This forces Angular to see a "change" and allows the chart to update.
    this.polarChartData = {
      ...this.polarChartData, // Keep labels
      datasets: [{
        ...this.polarChartData.datasets[0], // Keep colors/borders
        data: [...this.polarValues] // Assign the NEW array of numbers
      }]
    };

    // 5. Force Redraw
    if (this.chart) {
      this.chart.update();
    }
  }
}