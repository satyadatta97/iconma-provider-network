import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);
@Component({
  selector: 'app-user-engagement-metrics',
  standalone: false,
  templateUrl: './user-engagement-metrics.component.html',
  styleUrl: './user-engagement-metrics.component.scss'
})
export class UserEngagementMetricsComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("ActiveUsersChart");
    var CreditRisk = new Chart("ActiveUsersChart", {
      type: 'line' as ChartType, // Use line chart for area effect
      data: {
        labels: ['January', 'February', 'March', 'April','May','June','July','Aug','Sep','Oct','Nov','Dec'], // X-Axis Labels
        datasets: [
          {
            data: [1256, 1418, 1600, 1807, 2040, 2303,2280,2574,2650,2991,2900,3500],
            label: 'Total Active Users',
            borderColor: 'green',
            backgroundColor: 'green',
            tension: 0.4, // Curve the line
            fill: false,
            datalabels: {
              anchor: 'end',
              align: 'start',
              formatter: (value: number) => value.toString(),
              color:'#000'
            }
          },
        
        ]
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          }
        }
        
      },
      
    });
    var ctx = document.getElementById("InteractionModeChart");
    var Interactionmode = new Chart("InteractionModeChart", {
      type: 'pie' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Chat Interaction', 'Voice Interaction'],
        datasets: [
          {
            data: [85556, 192223], // 60% Chat, 40% Voice
            backgroundColor: ['#1d59a8', '#b84608'], // Custom colors
            hoverBackgroundColor: ['#1358b2', '#963c0b'],
            datalabels: {
              // anchor: 'end',
              // align: 'end',
              formatter: (value: number) => value.toString(),
              color:'#fff'
            }
          },
        
        ]
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          }
        }
        
      },
      
    });
    var ctx = document.getElementById("AverageSessionTimeChart");
    var Avgsession = new Chart("AverageSessionTimeChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: [ 'Average Session Duration (minutes)',],
        datasets: [
          {
            label: 'Chat Users',
            data: [12], // 4 minutes for Chat, 6 minutes for Voice
            backgroundColor: ['#219689', ], // Custom colors
            borderColor: ['#219689', ],
            borderWidth: 1,
            datalabels: {
              // anchor: 'end',
              // align: 'end',
              formatter: (value: number) => value.toString(),
              color:'#fff'
            }
          },
          {
            label: 'Voice Users',
            data: [ 7.5], // 4 minutes for Chat, 6 minutes for Voice
            backgroundColor: [ '#af480f'], // Custom colors
            borderColor: [ '#af480f'],
            borderWidth: 1,
            datalabels: {
              // anchor: 'end',
              // align: 'end',
              formatter: (value: number) => value.toString(),
              color:'#fff'
            }
          },
        
        ]
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          }
        }
        
      },
      
    });
  }
}
