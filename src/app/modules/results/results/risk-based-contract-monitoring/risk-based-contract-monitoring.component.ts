import { Component } from '@angular/core';
import{  Chart, ChartType, registerables,ScriptableContext} from "chart.js/auto";
@Component({
  selector: 'app-risk-based-contract-monitoring',
  standalone: false,
  templateUrl: './risk-based-contract-monitoring.component.html',
  styleUrl: './risk-based-contract-monitoring.component.scss'
})
export class RiskBasedContractMonitoringComponent {
  // ngOnInit(): void{
  //   var ctx = document.getElementById("performanceChart");
  //   var performanceScore = new Chart("performanceChart", {
  //     type: 'bar' as ChartType, // Use line chart for area effect
  //     data: {
  //       labels: ['Performance Score (%)',], // Contract IDs
  //       datasets: [
  //         {
  //           label: 'Contract 1',
  //           data: [92], // Performance Scores
  //           backgroundColor: [ '#9ad0f0'],
  //           borderColor: [ '#9ad0f0'],
  //           borderWidth: 1,
  //         },
  //         {
  //           label: 'Contract 2',
  //           data: [78], // Performance Scores
  //           backgroundColor: [ '#1d59a8',],
  //           borderColor: [ '#1d59a8', ],
  //           borderWidth: 1,
  //         },
  //         {
  //           label: 'Contract 3',
  //           data: [ 88], // Performance Scores
  //           backgroundColor: [ '#b14a1e',],
  //           borderColor: [ '#b14a1e',],
  //           borderWidth: 1,
  //         },
  //         {
  //           label: 'Contract 4',
  //           data: [ 81], // Performance Scores
  //           backgroundColor: ['#9ad0f0'],
  //           borderColor: [ '#9ad0f0'],
  //           borderWidth: 1,
  //         },
        
  //       ]
  //     },
  //     options: {
  //       //  responsive: true,
  //       responsive:true,
  //       maintainAspectRatio: false,
  //       scales: {
  //         x: {
  //           title: {
  //             display: true,
  //             //text: 'Contract ID',
  //           },
  //         },
  //         y: {
  //           beginAtZero: true,
  //           title: {
  //             display: true,
  //             text: 'Performance Score (%)',
  //           },
  //         },
  //       },
      
  //       plugins: {
  //         // datalabels: {
  //         //   // anchor: 'end',
  //         //   // align: 'end',
  //         //   formatter: (value: number) => value.toString(),
  //         //   color:'#fff'
  //         // },
  //         legend: {
  //           display: true,
  //           position: "bottom",
  //           align: "center"
  //         }
  //       }
        
  //     },
      
  //   });
  //   var ctx = document.getElementById("financialImpactChart");
  //   var financialimpact = new Chart("financialImpactChart", {
  //     type: 'bar' as ChartType, // Use line chart for area effect
  //     data: {
  //       labels: ['Contract 1', 'Contract 2', 'Contract 3', 'Contract 4'], // Contract IDs
  //       datasets: [
  //         {
  //           label: 'Shared Savings/Losses ($)',
  //           data: [120000, -70000, 90000, 40000], // Financial Impact Data
  //           backgroundColor: (context) => {
  //             const value = context.raw;
  //             return value >= 0 ? '#4caf50' : '#f44336'; // Green for gains, red for losses
  //           },
  //          //borderColor: '#4caf50',
  //           borderWidth: 1,
  //         },
          
        
  //       ]
  //     },
  //     options: {
  //       //  responsive: true,
  //       responsive:true,
  //       maintainAspectRatio: false,
  //       scales: {
  //         x: {
  //           title: {
  //             display: true,
  //             //text: 'Contract ID',
  //           },
  //         },
  //         y: {
  //           beginAtZero: true,
  //           title: {
  //             display: true,
  //             text: 'Shared Savings/Losses ($)',
  //           },
  //         },
  //       },
        
  //       plugins: {
  //         // datalabels: {
  //         //   // anchor: 'end',
  //         //   // align: 'end',
  //         //   formatter: (value: number) => value.toString(),
  //         //   color:'#fff'
  //         // },
  //         legend: {
  //           display: true,
  //           position: "bottom",
  //           align: "center"
  //         },
          
  //       }
        
  //     },
      
  //   });
  //   var ctx = document.getElementById("pfOutcomeChart");
  //   var projectedActual = new Chart("pfOutcomeChart", {
  //     type: 'line' as ChartType, // Use line chart for area effect
  //     data: {
  //       labels: ['Q1', 'Q2', 'Q3', 'Q4'], // Time periods (quarters)
  //       datasets: [
  //         {
  //           label: 'Projected Outcome ($)',
  //           data: [100000, -50000, 80000, 50000],
  //           borderColor: '#2196f3', // Blue line for projected outcomes
  //           backgroundColor: 'rgba(33, 150, 243, 0.2)',
  //           borderWidth: 2,
  //           tension: 0.3,
  //           fill: true,
  //           // datalabels: {
  //           //   anchor: 'end',
  //           //   align: 'start',
  //           //   formatter: (value: number) => value.toString(),
  //           //   color:'#000'
  //           // }
  //         },
  //         {
  //           label: 'Actual Outcome ($)',
  //           data: [120000, -70000, 90000, 40000],
  //           borderColor: '#4caf50', // Green line for actual outcomes
  //           backgroundColor: 'rgba(76, 175, 80, 0.2)',
  //           borderWidth: 2,
  //           tension: 0.3,
  //           fill: true,
  //           // datalabels: {
  //           //   anchor: 'end',
  //           //   align: 'start',
  //           //   formatter: (value: number) => value.toString(),
  //           //   color:'#000'
  //           // }
  //         },
         
  //       ]
  //     },
  //     options: {
  //       //  responsive: true,
  //       responsive:true,
  //       maintainAspectRatio: false,
  //       scales: {
  //         x: {
  //           title: {
  //             display: true,
  //             //text: 'Time Periods (Quarters)',
  //           },
  //         },
  //         y: {
  //           beginAtZero: false,
  //           title: {
  //             display: true,
  //             text: 'Financial Outcomes ($)',
  //           },
  //           // ticks: {
  //           //   callback: (value) => `$${value.toLocaleString()}`,
  //           // },
  //         },
  //       },
        
  //       plugins: {
  //         legend: {
  //           display: true,
  //           position: "bottom",
  //           align: "center"
  //         }
  //       }
        
  //     },
      
  //   });
  //   var ctx = document.getElementById("QMCChart");
  //   var QualityCompliance = new Chart("QMCChart", {
  //     type: 'bar' as ChartType, // Use line chart for area effect
  //     data: {
  //       labels: ['Quality Compliance (%)'], // Provider names
  //       datasets: [
  //         {
  //           label: 'Provider A',
  //           data: [96], // Quality Compliance data for each provider
  //           backgroundColor: (context: ScriptableContext<'bar'>) => {
  //             const value = context.raw;
  //             if (value < 85) {
  //               return '#ff0000'; // Red zone (<85%)
  //             } else if (value >= 85 && value <= 90) {
  //               return '#faa830'; // Yellow zone (85%-90%)
  //             } else {
  //               return '#2e842e'; // Green zone (>90%)
  //             }
  //           },
  //           borderWidth: 1,
           
  //         },
  //         {
  //           label: 'Provider B',
  //           data: [ 84,], // Quality Compliance data for each provider
  //           backgroundColor: (context) => {
  //             const value = context.raw;
  //             if (value < 85) {
  //               return '#ff0000'; // Red zone (<85%)
  //             } else if (value >= 85 && value <= 90) {
  //               return '#faa830'; // Yellow zone (85%-90%)
  //             } else {
  //               return '#2e842e'; // Green zone (>90%)
  //             }
  //           },
  //           borderWidth: 1,
           
  //         },
  //         {
  //           label: 'Provider C',
  //           data: [ 93,], // Quality Compliance data for each provider
  //           backgroundColor: (context: ScriptableContext<'bar'>) => {
  //             const value = context.raw;
  //             if (value < 85) {
  //               return '#ff0000'; // Red zone (<85%)
  //             } else if (value >= 85 && value <= 90) {
  //               return '#faa830'; // Yellow zone (85%-90%)
  //             } else {
  //               return '#2e842e'; // Green zone (>90%)
  //             }
  //           },
  //           borderWidth: 1,
           
  //         },
  //         {
  //           label: 'Provider D',
  //           data: [ 89], // Quality Compliance data for each provider
  //           backgroundColor: (context: ScriptableContext<'bar'>) => {
  //             const value = context.raw;
  //             if (value < 85) {
  //               return '#ff0000'; // Red zone (<85%)
  //             } else if (value >= 85 && value <= 90) {
  //               return '#faa830'; // Yellow zone (85%-90%)
  //             } else {
  //               return '#2e842e'; // Green zone (>90%)
  //             }
  //           },
  //           borderWidth: 1,
           
  //         },
  //       ],
  //     },
  //     options: {
  //       //  responsive: true,
  //       responsive:true,
  //       maintainAspectRatio: false,
  //       scales: {
  //         y: {
  //           max: 100, // Max value for compliance percentage
  //           min: 0, // Min value for compliance percentage
  //           ticks: {
  //             stepSize: 10, // Set step size on y-axis for compliance percentages
  //             display: false, // Hide y-axis ticks
  //           },
  //         },
  //       },
        
  //       plugins: {
  //         // datalabels: {
  //         //   // anchor: 'end',
  //         //   // align: 'end',
  //         //   formatter: (value: number) => value.toString(),
  //         //   color:'#fff'
  //         // },
  //         legend: {
  //           display: true,
  //           position: "bottom",
  //           align: "center"
  //         },
          
  //       }
        
  //     },
      
  //   });
  // }
}
