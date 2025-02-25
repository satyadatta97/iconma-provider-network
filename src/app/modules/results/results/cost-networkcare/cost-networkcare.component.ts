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
        labels: ['January', 'February', 'March', 'April'], // X-Axis: Months
        datasets: [
          {
            label: 'Total Cost ($)', // Line for Total Cost
            data: [1200000, 1178530, 1150000, 1130640], // Total Cost data
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
            label: 'In-Network Utilization (%)', // Line for In-Network Utilization
            data: [80, 82, 85, 87], // In-Network Utilization data
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
        labels: ['January', 'February', 'March', 'April'], // X-Axis: Months
        datasets: [
          {
            label: 'In-network Expenses',
            data: [216000, 172500, 236000, 146900],  // In-network data
            borderColor: 'rgba(0, 123, 255, 1)',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,  // Filling area under the line
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
            data: [50000, 60000, 45000, 65000],  // Out-network data
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
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
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['PMPM Cost ($)',], // X-Axis: Months
        datasets: [
          {
            label: 'January', // Label for the dataset
            data: [320,], // PMPM Cost data for each month
            backgroundColor: '#228282', // Bar color (light teal)
            borderColor: 'rgba(75, 192, 192, 1)', // Border color of bars
            borderWidth: 1 // Border width
          },
          {
            label: 'February', // Label for the dataset
            data: [ 310,], // PMPM Cost data for each month
            backgroundColor: '#1d59a8', // Bar color (light teal)
            borderColor: '#1d59a8', // Border color of bars
            borderWidth: 1 // Border width
          },
          {
            label: 'March', // Label for the dataset
            data: [ 315,], // PMPM Cost data for each month
            backgroundColor: '#ad4b20', // Bar color (light teal)
            borderColor: '#ad4b20', // Border color of bars
            borderWidth: 1 // Border width
          },
          {
            label: 'April', // Label for the dataset
            data: [320,], // PMPM Cost data for each month
            backgroundColor: '#e3882e', // Bar color (light teal)
            borderColor: '#e3882e', // Border color of bars
            borderWidth: 1 // Border width
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
              text: 'PMPM Cost ($)' // Label for Y-axis
            },
            // ticks: {
            //   beginAtZero: false, // Start from the lowest PMPM value
            //   callback: (value) => `$${value}` // Format the ticks as currency
            // }
          }
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
    
 
  }
}
