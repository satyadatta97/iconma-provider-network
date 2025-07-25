import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
@Component({
  selector: 'app-ai-prediction-accuracy',
  standalone: false,
  templateUrl: './ai-prediction-accuracy.component.html',
  styleUrl: './ai-prediction-accuracy.component.scss',
})
export class AiPredictionAccuracyComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("AIPredictionChart");
    var predctionai = new Chart("AIPredictionChart", {
      type: 'pie' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Correct Predictions', 'False Positives', 'False Negatives'],
        datasets: [
          {
            data: [91, 5, 4], // Percentages
            backgroundColor: ['#20a317', '#3455a3', '#af480f'], // Custom colors
            hoverBackgroundColor: ['#20a307', '#3455a3', '#af480f']
          }
        
        ]
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        
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
    var ctx = document.getElementById("accuracyChart");
    var dempgraphics = new Chart("accuracyChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Prediction Accuracy'],
        datasets: [
          {
            label: 'Age 18-35',
            data: [91],  // Accuracy values
            backgroundColor: '#3455a3',  // Color of bars
            borderColor: '#3455a3',  // Border color
            borderWidth: 1,
          },
          {
            label:  'Age 36-50',
            data: [ 94 ],  // Accuracy values
            backgroundColor: '#ab4912',  // Color of bars
            borderColor: '#ab4912',  // Border color
            borderWidth: 1,
          },
          {
            label:  'Age 51-65',
            data: [ 92],  // Accuracy values
            backgroundColor: '#1f8f18',  // Color of bars
            borderColor: '#1f8f18',  // Border color
            borderWidth: 1,
          },
          {
            label: 'Age 66+',
            data: [ 96],  // Accuracy values
            backgroundColor: '#48b4e4',  // Color of bars
            borderColor: '#48b4e4',  // Border color
            borderWidth: 1,
          },
          {
            label:'Male',
            data: [ 92 ],  // Accuracy values
            backgroundColor: '#3455a3',  // Color of bars
            borderColor: '#3455a3',  // Border color
            borderWidth: 1,
          },
          {
            label:  'Female',
            data: [ 93],  // Accuracy values
            backgroundColor: '#fa6383',  // Color of bars
            borderColor: '#fa6383',  // Border color
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
             // text: 'Demographic Group',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Prediction Accuracy (%)',
            },
            beginAtZero: true,  // Ensure y-axis starts from zero
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
  }
}
