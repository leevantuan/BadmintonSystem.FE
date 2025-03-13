import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements AfterViewInit {
  @ViewChild('chart', { static: true }) chartContainer!: ElementRef;
  private ApexCharts!: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const module = await import('apexcharts');
      this.ApexCharts = module.default;
      this.initChart();
    }
  }

  private initChart() {
    if (!this.ApexCharts) return;

    const options: any = {
      chart: {
        height: 400,
        type: 'area',
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      series: [
        {
          name: 'Income',
          data: [
            18000, 51000, 180000, 38000, 88000, 50000, 40000, 52000, 88000,
            80000, 60000, 70000,
          ],
        },
        {
          name: 'Outcome',
          data: [
            27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000,
            27000, 42000, 50000,
          ],
        },
      ],
      stroke: { curve: 'smooth', width: 2 },
      grid: { strokeDashArray: 2 },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          shadeIntensity: 1,
          opacityFrom: 0.1,
          opacityTo: 0.8,
        },
      },
      xaxis: {
        type: 'category',
        categories: [
          '25 Jan',
          '26 Jan',
          '27 Jan',
          '28 Jan',
          '29 Jan',
          '30 Jan',
          '31 Jan',
          '1 Feb',
          '2 Feb',
          '3 Feb',
          '4 Feb',
          '5 Feb',
        ],
        labels: { style: { colors: '#9ca3af', fontSize: '13px' } },
      },
      yaxis: {
        labels: {
          style: { colors: '#9ca3af', fontSize: '13px' },
          formatter: (value: number) =>
            value >= 1000 ? `${value / 1000}k` : `${value}`,
        },
      },
      colors: ['#2563eb', '#9333ea'],
    };

    const chart = new this.ApexCharts(
      this.chartContainer.nativeElement,
      options
    );
    chart.render();
  }
}
