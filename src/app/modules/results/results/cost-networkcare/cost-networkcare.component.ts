import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
@Component({
  selector: 'app-cost-networkcare',
  standalone: false,
  templateUrl: './cost-networkcare.component.html',
  styleUrl: './cost-networkcare.component.scss'
})
export class CostNetworkcareComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("networkUtilizationChart");
    var network = new Chart("networkUtilizationChart", {
      type: 'line' as ChartType, // Use line chart for area effect
      data: {
        labels: ['January', 'February', 'March', 'April','May','June','July','Aug','Sep','Oct','Nov','Dec'], // X-Axis Labels
        datasets: [
          {
            label: 'Avg Total Cost ($)', // Line for Total Cost
            data: [1279260, 1282685, 1384007, 1173258,1371126,1408557,1184638,1491174,1119104,1198420,1146791,1239584], // Total Cost data
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            backgroundColor: 'rgba(75, 192, 192, 1)', // Line fill color
            fill: false, // Fill the area under the line
            yAxisID: 'y1', // This dataset uses the left Y-axis (Total Cost)
            tension:0.3,
            datalabels: {
              anchor: 'end',
              align: 'start',
              formatter: (value: number) => value.toString(),
              color:'#000'
            }
          },
          {
            label: 'In Network Utilization (%)', // Line for In-Network Utilization
            data: [0.70,0.69,0.65,0.76,0.65,0.64,0.74,0.62,0.81,0.74,0.78,0.72], // In-Network Utilization data
            borderColor: 'rgba(255, 159, 64, 1)', // Line color
            backgroundColor: 'rgba(255, 159, 64, 1)', // Line fill color
            fill: false, // Fill the area under the line
            yAxisID: 'y2', // This dataset uses the right Y-axis (In-Network Utilization)
            tension:0.3,
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
             // text: 'Months', // X-axis title
            },
            

          },
          // y: {
           
          //   title: {
          //     display: true,
          //     text: 'Total Cost ($)', // Left Y-axis title
          //   },
           
          // },
          y2: {
            id: 'y2', // Right Y-axis (In-Network Utilization)
            position: 'right',
            title: {
              display: true,
              text: 'In-Network Utilization (%)', // Right Y-axis title
            },
            ticks: {
              beginAtZero: true,
          
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
    var ctx = document.getElementById("expenseChart");
    var expenses = new Chart("expenseChart", {
      type: 'line' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'], // X-Axis: Months
        datasets: [
          {
            label: 'In-network Expenses',
            data: [216000, 172500, 246000, 146080],  // In-network data
            borderColor: 'rgba(0, 123, 255, 1)',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: false,  // Filling area under the line
            tension: 0.3,  // Smoothness of the line
            datalabels: {
              anchor: 'end',
              align: 'start',
              formatter: (value: number) => value.toString(),
              color:'#000'
            }
          },
          {
            label: 'Out-network Expenses',
            data: [52000, 65000, 48000, 60000],  // Out-network data
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.3,
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
              //text: 'Months' // Label for X-axis
            }
          },
          y: {
            title: {
              display: true,
              text: 'Expenses ($)' // Label for Y-axis
            },
           // stacked: true, // Enable stacking
            // ticks: {
            //   beginAtZero: true, // Start from zero
            //   callback: (value) => `$${value.toLocaleString()}` // Format ticks as currency
            // }
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



    var ctx = document.getElementById("pmpmChart");
    var PMPMcomparison = new Chart("pmpmChart", {
      type: 'line' as ChartType, // ✅ Line Chart
      data: {
        labels: ['January', 'February', 'March', 'April','May','June','July','Aug','Sep','Oct','Nov','Dec'], // X-Axis Labels
        datasets: [
          {
            label: 'PMPM Cost ($)',
            data: [320, 415, 295, 352,328,401,421,298,342,326,375,318], // PMPM Cost Data
            borderColor: '#1d59a8', // ✅ Single Line Color
            backgroundColor:'transparent',
            borderWidth: 2, // Line Thickness
            pointBackgroundColor: '#1d59a8', // Data Point Color
            pointRadius: 5, // Size of Data Points
            fill: true, // ✅ Enables soft area fill (optional)
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months', // Label for X-axis
            },
          },
          y: {
            beginAtZero:true,
            title: {
              display: true,
              text: 'PMPM Cost ($)', // Label for Y-axis
            },
          },
        },
        plugins: {
          datalabels: {
            formatter: (value: number) => value.toString(),
            color: '#000',
            align:'start'
          },
          legend: {
            display: true,
            position: "bottom",
            align: "center",
          },
        },
      },
    });
    
    
 
  }
}
