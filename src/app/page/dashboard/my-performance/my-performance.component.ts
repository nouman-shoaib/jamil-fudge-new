import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss'],
})
export class MyPerformanceComponent implements OnInit {
  constructor() {}

  lineChartData: any[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Expenses' },
    { data: [85, 72, 78, 75, 77, 75], label: 'Net Worth' },
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
