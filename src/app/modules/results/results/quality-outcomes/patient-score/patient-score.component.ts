import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
// import { MatrixController, MatrixElement } from 'chartjs-chart-matrix'; 

@Component({
  selector: 'app-patient-score',
  standalone: false,
  templateUrl: './patient-score.component.html',
  styleUrl: './patient-score.component.scss'
})
export class PatientScoreComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("patientsatisfactoionscoreChart");
    var Satisfactiondata = new Chart("patientsatisfactoionscoreChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Patient Satisfaction Score (/10)',], // Providers on the X-axis
        datasets: [
          {
          label: 'Provider A', // Chart label
          data: [8.4], // Scores
          backgroundColor: ['#4CAF50',], // Bar colors
          borderColor: ['#388E3C',], // Border colors
          borderWidth: 1 // Border width
         },
         {
          label: 'Provider B', // Chart label
          data: [ 7.9], // Scores
          backgroundColor: ['#FF9800',], // Bar colors
          borderColor: ['#F57C00', ], // Border colors
          borderWidth: 1 // Border width
         },
         {
          label: 'Provider C', // Chart label
          data: [ 8.8], // Scores
          backgroundColor: [ '#2196F3', ], // Bar colors
          borderColor: [ '#1976D2', ], // Border colors
          borderWidth: 1 // Border width
         },
         {
          label: 'Provider D', // Chart label
          data: [ 7.2], // Scores
          backgroundColor: [ '#FFC007'], // Bar colors
          borderColor: [ '#FFA000'], // Border colors
          borderWidth: 1 // Border width
         },
         {
          label: 'Provider E', // Chart label
          data: [ 8.1], // Scores
          backgroundColor: [ '#3455a4'], // Bar colors
          borderColor: [ '#3455a4'], // Border colors
          borderWidth: 1 // Border width
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
            //  text: 'Providers' // X-axis label
            }
          },
          y: {
            title: {
              display: true,
              text: 'Patient Satisfaction Score (/10)' // Y-axis label
            },
            beginAtZero: true,
            max: 10 // Maximum score is 10
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
