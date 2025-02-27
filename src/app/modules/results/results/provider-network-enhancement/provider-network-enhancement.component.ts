import { Component } from '@angular/core';
import{ LinearScale, CategoryScale, Chart, registerables, ChartType, } from "chart.js/auto";
@Component({
  selector: 'app-provider-network-enhancement',
  standalone: false,
  templateUrl: './provider-network-enhancement.component.html',
  styleUrl: './provider-network-enhancement.component.scss'
})
export class ProviderNetworkEnhancementComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("HighPerformancePChart");
    var highperformance = new Chart("HighPerformancePChart", {
      type: 'bar', // Use line chart for area effect
      data: {
        labels: ['Region',], // Regions
        datasets: [
          {
            label: 'North',
            data: [0.85 ], // High Performer Percentages
            backgroundColor: ['#1d59a8', ],
            borderColor: ['#1d59a8', ],
            borderWidth: 1,
          },
          {
            label: 'South',
            data: [ 0.79], // High Performer Percentages
            backgroundColor: [ '#2e842e', ],
            borderColor: [ '#2e842e', ],
            borderWidth: 1,
          },
          {
            label: 'East',
            data: [ 0.82], // High Performer Percentages
            backgroundColor: [ '#b14a1e', ],
            borderColor: [ '#b14a1e', ],
            borderWidth: 1,
          },
          {
            label: 'West',
            data: [ 0.67], // High Performer Percentages
            backgroundColor: [ '#2e8282'],
            borderColor: [ '#2e8282'],
            borderWidth: 1,
          },
        
        ]
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
             // text: 'Avg Performance %',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'High Performers (%)',
            },
            ticks: {
              callback: (value) => `${value}%`,
              stepSize: 0.1,
            },
          },
        },
        plugins: {
          datalabels: {
            // anchor: 'end',
            // align: 'end',
            formatter: (value: number) => value.toString(),
            color:'#fff'
          },
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          }
        }
        
      },
      
    });
    var ctx = document.getElementById("AvgWaitTimeChart");
    var avgtime = new Chart("AvgWaitTimeChart", {
      type: 'line' as ChartType, // Use line chart for area effect
      data: {
        labels: ['June', 'July', 'August', 'September', 'October', 'November','December'], // Months
        datasets: [
          {
            label: 'North',
            data: [10, 9, 10, 8, 7, 5,6], // Average Wait Time for North
            borderColor: '#1d59a8',
            backgroundColor: '#1d59a8',
            tension: 0.4,
            pointBackgroundColor: '#1d59a8',
            datalabels: {
              anchor: 'end',
              align: 'start',
              formatter: (value: number) => value.toString(),
              color:'#000'
            }
          },
          {
            label: 'South',
            data: [8, 7, 8, 7, 6, 4,7], // Average Wait Time for South
            borderColor: '#2e842e',
            backgroundColor: '#2e842e',
            tension: 0.4,
            pointBackgroundColor: '#2e842e',
            datalabels: {
              anchor: 'end',
              align: 'start',
              formatter: (value: number) => value.toString(),
              color:'#000'
            }
          },
          {
            label: 'East',
            data: [8, 6, 8, 5, 6, 3,8], // Average Wait Time for East
            borderColor: '#b14a1e',
            backgroundColor: '#b14a1e',
            tension: 0.4,
            pointBackgroundColor: '#b14a1e',
            datalabels: {
              anchor: 'end',
              align: 'start',
              formatter: (value: number) => value.toString(),
              color:'#000'
            }
          },
          {
            label: 'West',
            data: [6, 5, 6, 5, 5, 6,5], // Average Wait Time for West
            borderColor: '#2e8282',
            backgroundColor: '#2e8282',
            tension: 0.4,
            pointBackgroundColor: '#2e8282',
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
        scales: {
          x: {
            title: {
              display: true,
              //text: 'Months',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Average Wait Time (Days)',
            },
            ticks: {
              stepSize: 1,
            },
          },
        },
        
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
