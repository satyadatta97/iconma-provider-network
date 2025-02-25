import { Component } from '@angular/core';
import{  Chart, ChartType, registerables, } from "chart.js/auto";
@Component({
  selector: 'app-health-outcomes',
  standalone: false,
  templateUrl: './health-outcomes.component.html',
  styleUrl: './health-outcomes.component.scss'
})
export class HealthOutcomesComponent {
  ngOnInit(): void{
    var ctx = document.getElementById("AlertDetectionCapturedChart");
var DetectionsCaptured = new Chart("AlertDetectionCapturedChart", {
  type: 'line', // Use line chart for area effect
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
   
      {
        data: [15, 22, 24, 26, 28, 30], // "Before" values between 15 and 30
        label: 'Before',
        borderColor: '#1d59a8',
        backgroundColor: '#1d59a8',
        tension: 0.4, // Curve the line
        fill: false,
        // datalabels: {
        //   anchor: 'end',
        //   align: 'start',
        //   formatter: (value) => value.toString(),
        //   color: '#000'
        // }
      },
      {
        data: [30, 42, 54, 60, 63, 70], // "After" values as percentages (30% to 70%)
        label: 'After',
        borderColor: '#269393',
        backgroundColor: '#269393',
        tension: 0.4, // Curve the line
        fill: false,
        // datalabels: {
        //   anchor: 'end',
        //   align: 'start',
        //   formatter: (value) => value.toString(),
        //   color: '#000'
        // }
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          //text: ' Phase'
        }
      },
      y: {
        beginAtZero: true,
       // max: 100,
        title: {
          display: true,
          text: 'Detections (%)'
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
  }
});

    var ctx = document.getElementById("AlertDetectionChart");
    var Alerts = new Chart("AlertDetectionChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: [
          'Hypertension',
          'Diabetes Risk',
          'Respiratory Issues',
          'Cardiac Irregularities',
          'Mental Health Flags'
        ],
        datasets: [
          {
            label: 'Alerts Issued',
            data: [1195, 828, 521, 278, 219],
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            borderWidth: 1
          },
          {
            label: 'Follow-up Actions Taken',
            data: [985, 703, 413, 276, 177],
            backgroundColor: '#66BB6A',
            borderColor: '#43A047',
            borderWidth: 1
          }
        
        ]
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              //text: 'Health Concerns'
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            title: {
              display: true,
              text: 'Count'
            }
          }
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
    var ctx = document.getElementById("MedicationChart");
    var Medications = new Chart("MedicationChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Medication Adherence'],
        datasets: [
          {
            label: 'Before ',
            data: [57], // 70% adherence before 
            backgroundColor: '#30968a',
            borderColor: '#30968a',
            borderWidth: 1
          },
          {
            label: 'After ',
            data: [75], // 85% adherence after 
            backgroundColor: '#36A2EB',
            borderColor: '#36A2EB',
            borderWidth: 1
          }
        
        ]
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              //text: ' Phase'
            }
          },
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Adherence (%)'
            }
          }
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
    var ctx = document.getElementById("ReductionRateChart");
    var HospitalRateReduction = new Chart("ReductionRateChart", {
      type: 'bar' as ChartType, // Use line chart for area effect
      data: {
        labels: ['Medication Adherence'],
        datasets: [
          {
            label: 'Baseline',
            data: [26], // 70% adherence before 
            backgroundColor: '#b3470c',
            borderColor: '#b3470c',
           
            borderWidth: 1
          },
          {
            label: 'Current',
            data: [7], // 85% adherence after 
            backgroundColor: '#2b57a5',
            borderColor: '#2b57a5',
            borderWidth: 1
          }
        
        ]
      },
      options: {
        //  responsive: true,
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              //text: ' Phase'
            }
          },
          y: {
            beginAtZero: true,
            max: 20,
            title: {
              display: true,
              text: 'Readmission Rate (%)'
            }
          }
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
  }
}
