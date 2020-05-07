import {  ChangeDetectionStrategy } from '@angular/core';

import { Color, Label } from 'ng2-charts';
import { Component, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';

import { SingleDataSet } from 'ng2-charts';
import { ChartType ,RadialChartOptions } from 'chart.js';
import {  ChartOptions } from 'chart.js';
import {  BaseChartDirective,  } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  showSpinner =true ;

  Locations = [
    {places : 'Banagalore'},
    {places : 'Tirupathi'},
    {places : 'Chennai'},
    {places : 'Manglore'},
  ]
  Plants = [
    {plant : 'Plant 1'},
    {plant : 'Plant 2'},
    {plant : 'Plant 3'},
    {plant : 'Plant 4'},
  ]

  Process = [
    {Process : 'Process 1'},
    {Process : 'Process 2'},
    {Process : 'Process 3'},
    {Process : 'Process 4'},
  ]















   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['-6', '-5', '-4', '-3', '-2', '-1', 'Today'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'BP' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'P' },
    { data: [45, 20, 45, 95, 65, 65, 21], label: 'FP' }
  ];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
public polarAreaChartLabels: Label[] = ['Production', 'Loss', 'Expences', 'Budget', 'TargetSales'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  public chartClick({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHover({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
public lineChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40,32,84,56,24,86,24], label: '2019' },
  { data: [28, 48, 40, 19, 86, 27, 90,41,84,85,22,36,45], label: '2020' },
  { data: [50, 33, 62, 65, 20, 55, 40,54,32,84,21,52,45], label: '2018' },
  // { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
];
public lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'June', 'July','Aug' ,'Sep', 'Oct','Nov','Dec'];
public lineChartOptions: (ChartOptions & { annotation: any }) = {
  responsive: true,
  scales: {
    // We use this empty structure as a placeholder for dynamic theming.
    xAxes: [{}],
    yAxes: [
      {
        id: 'y-axis-0',
        position: 'left',
      },
      {
        id: 'y-axis-1',
        position: 'right',
        gridLines: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          fontColor: 'red',
        }
      }
    ]
  },
  annotation: {
    annotations: [
      {
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: 'March',
        borderColor: 'orange',
        borderWidth: 2,
        label: {
          enabled: true,
          fontColor: 'orange',
          content: 'LineAnno'
        }
      },
    ],
  },
};
public lineChartColors: Color[] = [
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  { // red
    backgroundColor: 'rgba(255,0,0,0.3)',
    borderColor: 'red',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [pluginAnnotations];

@ViewChild(BaseChartDirective) chart: BaseChartDirective;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // selectProcess : FormGroup = new FormGroup({
  //   ThingLocation : new FormControl(null),
  //   ThingType : new FormControl(null),
  //   Thing : new FormControl(null),
  // })
  // lineChartData: ChartDataSets[] = [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  // ];

  // lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  // lineChartOptions = {
  //   responsive: true,
  // };

  // lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,255,0,0.28)',
  //   },
  // ];

  // lineChartLegend = true;
  // lineChartPlugins = [];
  // lineChartType = 'line';
  constructor() { }

tokenid ;
userform;


// tslint:disable-next-line: use-life-cycle-interface
ngOnInit() {

this.tokenid = localStorage.getItem('tokenid')
this.userform = localStorage.getItem('userform.username')
console.log('this is dashboard' ,this.tokenid);
console.log('this is user' ,this.userform);


  }
  onSubmit(){

  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }

  onSubmits() {

  }
  onClear(){

  }
 }
