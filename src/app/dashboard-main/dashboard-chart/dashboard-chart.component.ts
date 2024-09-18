import { Component, inject, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { ThemeOption } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import { GraphsChartsService } from '../../shared/services/graphs-charts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './dashboard-chart.component.html',
  styleUrl: './dashboard-chart.component.css',
  providers: [provideEcharts()],
})
export class DashboardChartComponent implements OnInit {
  graphsChartsService = inject(GraphsChartsService);
  theme!: string | ThemeOption;
  categoryDataSubscription!: Subscription;

  options: EChartsOption = {};

  ngOnInit(): void {
    this.categoryDataSubscription =
      this.graphsChartsService.categoryData$.subscribe((categoryData) => {
        this.setChartOptions(categoryData);
      });
  }

  setChartOptions(categoryData: any[]) {
    this.options = {
      title: {
        left: '50%',
        text: 'Expenses by Category',
        textAlign: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : ${c} ({d}%)',
      },
      legend: {
        bottom: 10,
        data: categoryData.map((item) => item.name),
      },
      series: [
        {
          name: 'Expenses',
          type: 'pie',
          radius: [30, 90],
          roseType: 'area',
          data: categoryData,
        },
      ],
    };
  }

  ngOnDestroy(): void {
    if (this.categoryDataSubscription) {
      this.categoryDataSubscription.unsubscribe();
    }
  }
}
