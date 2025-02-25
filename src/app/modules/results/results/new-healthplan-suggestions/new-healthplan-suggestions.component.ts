import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
import { max } from 'rxjs';
@Component({
  selector: 'app-new-healthplan-suggestions',
  standalone: false,
  templateUrl: './new-healthplan-suggestions.component.html',
  styleUrl: './new-healthplan-suggestions.component.scss'
})
export class NewHealthplanSuggestionsComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("DPDChart");
    var distribution = new Chart("DPDChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Current Enrollment (%)',  ], // Demographic Groups
        datasets: [
          {
            label: 'Millennials',
            data: [25,], // Enrollment percentages
            backgroundColor: ['#2b57a6',],
            borderColor: ['#2b57a6',],
            borderWidth: 1,
          },
          {
            label: 'Seniors',
            data: [ 20], // Enrollment percentages
            backgroundColor: [ '#278327', ],
            borderColor: ['#278327', ],
            borderWidth: 1,
          },
          {
            label: 'Families',
            data: [40,], // Enrollment percentages
            backgroundColor: ['#ad4b20',],
            borderColor: [ '#ad4b20',],
            borderWidth: 1,
          },
          {
            label:  'Self-Employed',
            data: [15], // Enrollment percentages
            backgroundColor: [ '#378282'],
            borderColor: [ '#378282'],
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
             //text: 'Demographic Group',
            },
          },
          y: {
            beginAtZero: true,
            max:100,
            title: {
              display: true,
              text: 'Enrollment (%)',
            },
            // ticks: {
            //   callback: (value) => `${value}%`,
            // },
          },
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
    var ctx = document.getElementById("PNPEChart");
    var predictedplan = new Chart("PNPEChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: [
          'Predicted New Plan Enrollment',
          
        ], // New Health Plans
        datasets: [
          {
            label:  'Enhanced Digital Access Plan',
            data: [5000], // Predicted Enrollment Data
            backgroundColor: ['#42a5f5',],
            borderColor: ['#42a5f5',],
            borderWidth: 1,
          },
          {
            label:  'Comprehensive Care Plan',
            data: [4000], // Predicted Enrollment Data
            backgroundColor: [ '#278327', ],
            borderColor: [ '#278327',],
            borderWidth: 1,
          },
          {
            label:  'Family Wellness Plan',
            data: [ 6000], // Predicted Enrollment Data
            backgroundColor: [ '#ffa726',],
            borderColor: [ '#ffa726', ],
            borderWidth: 1,
          },
          {
            label: 'Flexible Coverage Plan',
            data: [ 3000], // Predicted Enrollment Data
            backgroundColor: [ '#1d59a8'],
            borderColor: [ '#1d59a8'],
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
             //text: 'New Health Plans',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
             // text: 'Predicted Enrollment',
            },
            // ticks: {
            //   callback: (value) => value.toLocaleString(), // Format numbers with commas
            // },
          },
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
    var ctx = document.getElementById("PRvPEChart");
    var Potentialrevenue = new Chart("PRvPEChart", {
      type: "scatter",
      data: {
       // labels: ["Oct-23", "Nov-23", "Dec-23","Jan-24","Feb-24","Mar-24","Apr-24","May-24","Jun-24","Jul-24","Aug-24","Sep-24"],
        datasets: [
          {
            label: 'Potential Revenue vs. Predicted Enrollment',
            data: [
              {
                x: 5000, // Predicted Enrollment for Millennials
                y: 6000000, // Potential Revenue for Millennials
                r: 25, // Current Enrollment (%) for Millennials
              },
              {
                x: 4000, // Predicted Enrollment for Seniors
                y: 5200000, // Potential Revenue for Seniors
                r: 20, // Current Enrollment (%) for Seniors
              },
              {
                x: 6000, // Predicted Enrollment for Families
                y: 7800000, // Potential Revenue for Families
                r: 40, // Current Enrollment (%) for Families
              },
              {
                x: 3000, // Predicted Enrollment for Self-Employed
                y: 3600000, // Potential Revenue for Self-Employed
                r: 15, // Current Enrollment (%) for Self-Employed
              },
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bubble color
            borderColor: 'rgba(75, 192, 192, 1)', // Bubble border color
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
              //text: 'Predicted Enrollment',
            },
            min: 2000, // Minimum value for Predicted Enrollment
            max: 7000, // Maximum value for Predicted Enrollment
          },
          y: {
            title: {
              display: true,
              text: 'Potential Annual Revenue ($)',
            },
            min: 3000000, // Minimum value for Potential Revenue
            max: 8000000, // Maximum value for Potential Revenue
          },
        },
         plugins: {
          // datalabels: {
          //   anchor: 'end',
          //   align: 'start',
          //   color:'#000'
          // },
          legend: {
            display: true,
            position: "bottom",
            align: "center",
            
          },
          
        }
         
       },
      
    });
  }
}
