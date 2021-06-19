import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss'],
})
export class MyPerformanceComponent implements OnInit {
  constructor() {}

  lineChartData: any[] = [
    { data: [10, 72, 56, 42, 25, 75], label: 'Expenses' },
    { data: [2, 23, 32, 16, 66, 50], label: 'Net Worth' },
  ];

  lineChartLabels: any[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: 'bottom',
    },
  };

  lineChartColors: any[] = [
    {
      borderColor: '#ff0',
      backgroundColor: '',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: string = 'line';
  ngOnInit(): void {}
}
