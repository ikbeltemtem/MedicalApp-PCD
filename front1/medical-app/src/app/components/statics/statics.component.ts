import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
import { Static } from 'src/app/common/static';
import { StaticService } from 'src/app/services/static.service';
Chart.register(...registerables);
@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.css']
})
export class StaticsComponent implements OnInit {
  chartdata: Static[]=[];

  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];
  constructor(private statService:StaticService) { }

  ngOnInit(): void {
    this.statService.getStat().subscribe(result => {
      this.chartdata = result;
      console.log(this.chartdata);
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length ;i++){
          console.log(this.chartdata[i]);
          this.labeldata.push(this.chartdata[i].nb);
          this.realdata.push(this.chartdata[i].amount);
          this.colordata.push(this.chartdata[i].color);
        }
        this.RenderChart(this.labeldata,this.realdata,this.colordata);
      }});
  }


  RenderChart(labeldata:any,maindata:any,colordata:any) {
    const myChart = new Chart("piechart", {
      type: 'bar',
      data: {
        labels: labeldata,
        datasets: [{
          label: '# of Votes',
          data: maindata,
          backgroundColor: colordata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    


  }
}
