import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
@Component({
  selector: 'app-user-satisfaction',
  standalone: false,
  templateUrl: './user-satisfaction.component.html',
  styleUrl: './user-satisfaction.component.scss'
})
export class UserSatisfactionComponent {
  ngOnInit(): void{
   
    var ctx = document.getElementById("SatisfactionCircleChart");
    var scorescircle = new Chart("SatisfactionCircleChart", {
      type: 'pie' as ChartType, // Use line chart for area effect
      data: {
        labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],  // Rating labels
        datasets: [
          {
            data: [63, 27, 5.8, 4.2, 0],  // Percentages for each rating
            backgroundColor: ['#4CAF50', '#3b53a1', '#af480f', '#FF9800', '#F44336'],  // Colors for the sections
            hoverBackgroundColor: ['#66BB6A', '#3b53a1', '#af480f', '#FFB74D', '#EF5350'],  // Hover colors
          },
          
        
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
    var ctx = document.getElementById("SatisfactionRatingsOVTChart");
    var scoresovertime = new Chart("SatisfactionRatingsOVTChart", {
      type: 'line' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun'],  // Satisfaction ratings
        datasets: [
          {
            label: 'Satisfaction Score(%)',
            data: [26, 39, 42, 56, 79,88],  // Number of users for each rating
            backgroundColor: '#3b968b',  // Color of bars
            borderColor: '#3b968b',  // Border color
            borderWidth: 2,
          },
          
        
        ]
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          // x: {
          //   title: {
          //     display: true,
          //     text: 'Satisfaction Rating',
          //   },
          // },
          y: {
            title: {
              display: true,
              text: 'Satisfaction Score(%)',
            },
            beginAtZero: true,  // Ensure y-axis starts from zero
          },
        },
      
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'start',
            formatter: (value: number) => value.toString(),
            color:'#000'
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
