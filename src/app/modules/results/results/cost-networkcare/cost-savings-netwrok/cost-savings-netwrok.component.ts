import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
@Component({
  selector: 'app-cost-savings-netwrok',
  standalone: false,
  templateUrl: './cost-savings-netwrok.component.html',
  styleUrl: './cost-savings-netwrok.component.scss'
})
export class CostSavingsNetwrokComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("CostSavingsInNetworkChart");
    var costsavingsdata = new Chart("CostSavingsInNetworkChart", {
      type: "pie",
      data: {
        labels: ['In-Network Utilization ($)', 'Care Coordination ($)', 'Other Initiatives ($)'], // Slices representing initiatives
        datasets: [
          {
            data: [4870, 3245, 2800], // Cost savings from different initiatives
            backgroundColor: ['#215d7f', '#e07133', '#1f6b27'], // Colors for each slice
            borderColor: ['#215d7f', '#e07133', '#1f6b27'], // Border colors for each slice
            borderWidth: 1
          }
      ]
    
        
      },
      options: {
        //  responsive: true,
        responsive:true,
         maintainAspectRatio: false,
         
         plugins: {
          datalabels: {
            display: true, // To show data labels
            color: '#fff',
            font: {
              weight: 'normal',
              size: 12,
              
            },
            formatter: (value: number) => value.toString() // Display the value
          },
          legend: {
            display: true,
            position: "bottom",
            // align: "center"
          }
        }
         
       },
      
    });
  }
}
