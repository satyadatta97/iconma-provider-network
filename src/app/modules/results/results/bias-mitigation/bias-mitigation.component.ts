import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
@Component({
  selector: 'app-bias-mitigation',
  standalone: false,
  templateUrl: './bias-mitigation.component.html',
  styleUrl: './bias-mitigation.component.scss'
})
export class BiasMitigationComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("BiasDetectionChart");
    var biasdetect = new Chart("BiasDetectionChart", {
      type: 'line' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Bias Incidents Detected',
            data: [8, 9, 3, 6, 4, 2],
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
            // datalabels: {
            //   anchor: 'end',
            //   align: 'start',
            //   formatter: (value: number) => value.toString(),
            //   color:'#000'
            // }
          },
          {
            label: 'Bias Incidents Resolved',
            data: [6, 7, 2, 6, 4, 2],
            borderColor: '#36A2EB',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.4,
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
        
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          }
        }
        
      },
      
    });
    // var ctx = document.getElementById("ServiceEqityChart");
    // var Servicequity = new Chart("ServiceEqityChart", {
    //   type: "bar",
    //   data: {
    //     labels: ['John Doe', 'Jane Smith', 'Emily Davis', 'Michael Brown'],
    //     datasets: [
    //       {
    //         label: 'Patients Managed',
    //         data: [25, 20, 22, 23],
    //         backgroundColor: '#C14400',
    //         borderColor: '#C14400',
    //         borderWidth: 1
    //       },
    //       {
    //         label: 'Avg. HbA1c Reduction (%)',
    //         data: [1.5, 1.8, 1.6, 1.7],
    //         backgroundColor: '#ed1c24',
    //         borderColor: '#ed1c24',
    //         borderWidth: 1
    //       },
    //       {
    //         label: 'Patient Satisfaction Score',
    //         data: [9.0, 8.8, 9.2, 9.1],
    //         backgroundColor: '#005baa',
    //         borderColor: '#005baa',
    //         borderWidth: 1
    //       }
    //     ]
        
    //   },
    //   options: {
    //     //  responsive: true,
    //     responsive:true,
  
    //       maintainAspectRatio: false,
         
    //       plugins: {
    //       datalabels: {
    //         display: true, // To show data labels
    //         color: '#fff',
    //         font: {
    //           weight: 'normal',
    //           size: 12,
              
    //         },
    //         formatter: (value: number) => value.toString() // Display the value
    //       },
    //       legend: {
    //         display: true,
    //         position: "bottom",
    //         align: "center"
    //       }
    //     }
          
    //     },
      
    // });
  }
}
