import { Component } from '@angular/core';
import{  Chart, ChartType, registerables,ScriptableContext} from "chart.js/auto";
@Component({
  selector: 'app-risk-based-contract-monitoring',
  standalone: false,
  templateUrl: './risk-based-contract-monitoring.component.html',
  styleUrl: './risk-based-contract-monitoring.component.scss'
})
export class RiskBasedContractMonitoringComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("performanceChart");
    var performanceScore = new Chart("performanceChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Performance Score (%)',], // Contract IDs
        datasets: [
          {
            label: 'Contract 1',
            data: [91.60], // Performance Scores
            backgroundColor: [ '#9ad0f0'],
            borderColor: [ '#9ad0f0'],
            borderWidth: 1,
          },
          {
            label: 'Contract 2',
            data: [79], // Performance Scores
            backgroundColor: [ '#1d59a8',],
            borderColor: [ '#1d59a8', ],
            borderWidth: 1,
          },
          {
            label: 'Contract 3',
            data: [ 85], // Performance Scores
            backgroundColor: [ '#b14a1e',],
            borderColor: [ '#b14a1e',],
            borderWidth: 1,
          },
          {
            label: 'Contract 4',
            data: [ 80], // Performance Scores
            backgroundColor: ['#9ad0f0'],
            borderColor: [ '#9ad0f0'],
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
              //text: 'Contract ID',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Performance Score (%)',
            },
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



    var ctx = document.getElementById("financialImpactChart");
    var financialimpact = new Chart("financialImpactChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Contract 1', 'Contract 2', 'Contract 3', 'Contract 4'], // Contract IDs
        datasets: [
          {
            label: 'Shared Savings/Losses ($)',
            data: [458.53, 2279.30, -983.45, 1260.45], // Financial Impact Data
            // backgroundColor: (context) => {
            //   const value = context.raw;
            //   return value >= 0 ? '#4caf50' : '#f44336'; // Green for gains, red for losses
            // },
            backgroundColor: '#4caf50',
            borderColor: '#4caf50',
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
              //text: 'Contract ID',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Shared Savings/Losses ($)',
            },
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
          },
          
        }
        
      },
      
    });
    var ctx = document.getElementById("pfOutcomeChart");
    var projectedActual = new Chart("pfOutcomeChart", {
      type: 'line' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'], // Time periods (quarters)
        datasets: [
          {
            label: 'Projected Outcome ($)',
            data: [158600, 108500, 138880, 136102.4],
            borderColor: '#2196f3', // Blue line for projected outcomes
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderWidth: 2,
            tension: 0.3,
            fill: true,
            datalabels: {
              anchor: 'end',
              align: 'start',
              formatter: (value: number) => value.toString(),
              color:'#000'
            }
          },
          {
            label: 'Actual Outcome ($)',
            data: [182390, 136710, 159712, 156517.76],
            borderColor: '#4caf50', // Green line for actual outcomes
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderWidth: 2,
            tension: 0.3,
            fill: true,
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
              //text: 'Time Periods (Quarters)',
            },
          },
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Financial Outcomes ($)',
            },
            // ticks: {
            //   callback: (value) => `$${value.toLocaleString()}`,
            // },
          },
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
    var ctx = document.getElementById("QMCChart");
    var QualityCompliance = new Chart("QMCChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Quality Compliance (%)'], // Provider names
        datasets: [
          {
            label: 'Provider A',
            data: [91], // Quality Compliance data for each provider
            backgroundColor: '#4caf50',
            borderWidth: 1,
           
          },
          {
            label: 'Provider B',
            data: [ 84,], // Quality Compliance data for each provider
            backgroundColor: '#4caf50',
            borderWidth: 1,
           
          },
          {
            label: 'Provider C',
            data: [ 91,], // Quality Compliance data for each provider
            backgroundColor: '#4caf50',
            borderWidth: 1,
           
          },
          {
            label: 'Provider D',
            data: [ 84], // Quality Compliance data for each provider
            backgroundColor: '#4caf50',
            borderWidth: 1,
           
          },
          {
            label: 'Provider E',
            data: [ 85], // Quality Compliance data for each provider
            backgroundColor: '#4caf50',
            borderWidth: 1,
           
          },
        ],
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          y: {
            max: 100, // Max value for compliance percentage
            min: 0, // Min value for compliance percentage
            ticks: {
              stepSize: 10, // Set step size on y-axis for compliance percentages
              display: false, // Hide y-axis ticks
            },
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
          },
          
        }
        
      },
      
    });
  }
}
