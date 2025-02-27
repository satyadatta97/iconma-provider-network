import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
@Component({
  selector: 'app-operational-efficiency',
  standalone: false,
  templateUrl: './operational-efficiency.component.html',
  styleUrl: './operational-efficiency.component.scss'
})
export class OperationalEfficiencyComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("SupportCallChart");
    var supportcall = new Chart("SupportCallChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Support Calls per Month',], // X-axis labels
        datasets: [
          {
            label: 'Before ',
          data: [16044.54], // Data points for each period
          backgroundColor: ['#FF6384'], // Bar colors
          borderColor: ['#FF6384'],
          borderWidth: 1,
          },
          {
            label: 'After ',
          data: [ 11735.45], // Data points for each period
          backgroundColor: [ '#36A2EB'], // Bar colors
          borderColor: [ '#36A2EB'],
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
              //text: 'Time Period',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Number of Support Calls',
            },
            beginAtZero: true, // Ensure the y-axis starts from zero
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
    var ctx = document.getElementById("CostSavingsChart");
    var savings = new Chart("CostSavingsChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Operational Costs (%)', ], // X-axis labels
        datasets: [
          {
          label: 'Before ',
          data: [56,], // Operational cost data
          backgroundColor: ['#FF5733',], // Bar colors
          borderColor: ['#FF5733'],
          borderWidth: 1,
          },
          {
            label:'After ',
            data: [44], // Operational cost data
            backgroundColor: [ '#33B5E5'], // Bar colors
            borderColor: [ '#0099CC'],
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
              //text: 'Time Period',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Operational Costs ($)',
            },
            beginAtZero: true, // Start y-axis from zero
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
    var ctx = document.getElementById("StaffResourceAllocationChart");
    var allocationresource = new Chart("StaffResourceAllocationChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Time Spent on Routine Inquiries (%)', ], // X-axis labels
        datasets: [
          {
            label: 'Before ',
            data: [46], // Data points for before and after
            backgroundColor: [ '#af480f',], // Colors for bars
            borderColor: [ '#af480f',],
            borderWidth: 1,
          },
          {
            label: 'After ',
            data: [21], // Data points for before and after
            backgroundColor: ['#1d59a8',], // Colors for bars
            borderColor: [ '#1d59a8',],
            borderWidth: 1,
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
          //     text: 'Time Period',
          //   },
          // },
          y: {
            title: {
              display: true,
              text: 'Time Allocation (%)',
            },
            beginAtZero: true,
            max: 100, // Ensure the y-axis represents percentage
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
