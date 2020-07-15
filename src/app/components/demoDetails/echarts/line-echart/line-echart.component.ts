import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'component-line-echart',
  templateUrl: 'line-echart.component.html',
  styleUrls: ['./line-echart.component.scss']
})

export class LineEhcartComponent implements OnInit {
  public chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ]
  }; // 图表数据
  constructor() { }

  ngOnInit() { }
}
