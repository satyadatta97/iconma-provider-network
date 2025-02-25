import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
@Component({
  selector: 'app-quality-outcomes',
  standalone: false,
  templateUrl: './quality-outcomes.component.html',
  styleUrl: './quality-outcomes.component.scss'
})
export class QualityOutcomesComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("patientOutcomeChart");
    var outcomedata = new Chart("patientOutcomeChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Patient Outcomes Score (%)',], // Providers on the X-axis
        datasets: [
          {
            label: 'Provider A', // Y-axis label
            data: [90,], // Patient outcomes scores for each provider
            backgroundColor: '#1f821f', // Bar color
            borderColor: '#1f821f', // Border color for bars
            borderWidth: 1,
          },
          {
            label: 'Provider B', // Y-axis label
            data: [ 82,], // Patient outcomes scores for each provider
            backgroundColor: '#ab4912', // Bar color
            borderColor: '#ab4912', // Border color for bars
            borderWidth: 1,
          },
          {
            label: 'Provider C', // Y-axis label
            data: [ 75], // Patient outcomes scores for each provider
            backgroundColor: '#41519f', // Bar color
            borderColor: '#41519f', // Border color for bars
            borderWidth: 1,
          },
          {
            label: 'Provider D', // Y-axis label
            data: [ 88], // Patient outcomes scores for each provider
            backgroundColor: '#fa9917', // Bar color
            borderColor: '#fa9917', // Border color for bars
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
             // text: 'Providers', // Label for the X-axis
            },
          },
          y: {
            max:100,
            title: {
              display: true,
              text: 'Patient Outcomes Score (%)', // Label for the Y-axis
            },
            ticks: {
              beginAtZero: true, // Starts the Y-axis from 0
              max: 100, // Set max value for Y-axis to 100 (percentage scale)
              stepSize: 10, // Sets step size for Y-axis ticks
            }
          }
        },
      
        plugins: {
          // datalabels: {
          //   // anchor: 'end',
          //   // align: 'end',
          //   formatter: (value: number) => value.toString(),
          //   color:'#fff'
          // },
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          }
        }
        
      },
      
    });
    var ctx = document.getElementById("readmissionRateChart");
    var remissionrate = new Chart("readmissionRateChart", {
      type: 'line' as ChartType, // Use line chart for area effect
      data: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ], // X-Ax
        datasets: [
          {
            label: 'Provider A', // Line for Provider A
            data: [12, 11, 13, 14, 12, 13, 14, 13, 12, 13, 12, 14], // Readmission rates for Provider A
            borderColor: '#b9481a', // Line color
            backgroundColor: '#b9481a', // Line area color
            fill: false, // Fills the area under the line
            tension: 0.4, // Smoothness of the line
            // datalabels: {
            //   anchor: 'end',
            //   align: 'start',
            //   formatter: (value: number) => value.toString(),
            //   color:'#000'
            // }
          },
          {
            label: 'Provider B', // Line for Provider B
            data: [7, 8, 6, 7, 5, 6, 8, 7, 6, 7, 6, 5], // Readmission rates for Provider B
           
            borderColor: '#1d59a8', // Line color
            backgroundColor: '#1d59a8', // Line area color
            fill: false, // Fills the area under the line
            tension: 0.4, // Smoothness of the line
            // datalabels: {
            //   anchor: 'end',
            //   align: 'start',
            //   formatter: (value: number) => value.toString(),
            //   color:'#000'
            // }
          },
          {
            label: 'Provider C', // Line for Provider C
       
            data: [9, 10, 7, 8, 9, 8, 9, 8, 7, 8, 11, 8], // Readmission rates for Provider D
            borderColor: '#829faf', // Line color
            backgroundColor: '#829faf', // Line area color
            fill: false, // Fills the area under the line
            tension: 0.4, // Smoothness of the line
            // datalabels: {
            //   anchor: 'end',
            //   align: 'start',
            //   formatter: (value: number) => value.toString(),
            //   color:'#000'
            // }
          },
          {
            label: 'Provider D', // Line for Provider D
            data: [5, 6, 5, 8, 6, 5, 6, 5, 7, 5, 10, 6], // Readmission rates for Provider C
            borderColor: '#de7d1c', // Line color
            backgroundColor: '#de7d1c', // Line area color
            fill: false, // Fills the area under the line
            tension: 0.4, // Smoothness of the line
            // datalabels: {
            //   anchor: 'end',
            //   align: 'start',
            //   formatter: (value: number) => value.toString(),
            //   color:'#000'
            // }
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
             // text: 'Months', // Label for the X-axis
            },
          },
          y: {
            title: {
              display: true,
              text: 'Readmission Rate (%)', // Label for the Y-axis
            },
            ticks: {
              beginAtZero: true, // Starts the Y-axis from 0
              max: 20, // Set max value for Y-axis
              stepSize: 1, // Sets step size for Y-axis ticks
            }
          }
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
    var ctx = document.getElementById("GuidelinesChart");
    var Guidelinesdata  = new Chart("GuidelinesChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Provider A', 'Provider B', 'Provider C', 'Provider D'], // Providers on the X-axis
        datasets: [
          {
            label: 'Guideline Adherence (%)', // First stack: Guideline Adherence
            data: [90, 83, 92, 84], // Guideline Adherence for each provider
            backgroundColor: '#2b57a6', // Color of the bars
            borderColor: '#2b57a6', // Border color
            borderWidth: 1,
          },
          {
            label: 'Complication Rate (%)', // Second stack: Complication Rate
            data: [10, 17, 8, 16], // Complication Rate for each provider
            backgroundColor: '#b5491c', // Color of the bars
            borderColor: '#b5491c', // Border color
            borderWidth: 1,
          }
        
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
              //text: 'Providers', // Label for X-axis
            },
            stacked: true, // Enables stacking for the bars
          },
          y: {
            title: {
              display: true,
              text: 'Percentage (%)', // Label for Y-axis
            },
            stacked: true, // Enables stacking for the bars
            ticks: {
              beginAtZero: true, // Start the Y-axis from 0
              max: 100, // Max value for Y-axis
              stepSize: 10, // Step size for Y-axis ticks
            }
          }
        },
        plugins: {
          // datalabels: {
          //   // anchor: 'end',
          //   // align: 'end',
          //   formatter: (value: number) => value.toString(),
          //   color:'#fff'
          // },
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
