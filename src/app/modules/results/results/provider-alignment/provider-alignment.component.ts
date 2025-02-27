import { Component } from '@angular/core';
import{ LinearScale, CategoryScale, Chart, registerables, } from "chart.js/auto";
@Component({
  selector: 'app-provider-alignment',
  standalone: false,
  templateUrl: './provider-alignment.component.html',
  styleUrl: './provider-alignment.component.scss'
})
export class ProviderAlignmentComponent {
  ngOnInit(): void{
    // var ctx = document.getElementById("QPPTCRChart");
    // var qualityProgramm = new Chart("QPPTCRChart", {
    //   type: 'bar', // Use line chart for area effect
    //   data: {
    //     labels: ['Provider A', 'Provider B', 'Provider C', 'Provider D'], // Providers
    //     datasets: [
    //       {
    //         label: 'Quality Program Participation',
    //         data: [100, 78, 100, 100], // Yes = 100%, No = 0%
    //         backgroundColor: '#278327',
    //         borderColor: '#278327',
    //         borderWidth: 1,
    //       },
    //       {
    //         label: 'Training Completion Rate (%)',
    //         data: [100, 85, 100, 95], // Training Completion Rates
    //         backgroundColor: '#3455a4',
    //         borderColor: '#3455a4',
    //         borderWidth: 1,
    //       },
          
        
    //     ]
    //   },
    //   options: {
    //     //  responsive: true,
    //     responsive:true,
    //     maintainAspectRatio: false,
    //     scales: {
    //       x: {
    //         title: {
    //           display: true,
    //           text: 'Providers',
    //         },
    //         stacked: false,
    //       },
    //       y: {
    //         beginAtZero: true,
    //         title: {
    //           display: true,
    //           text: 'Percentage (%)',
    //         },
    //         ticks: {
    //           callback: (value) => `${value}%`,
    //         },
    //       },
    //     },
      
    //     plugins: {
    //       datalabels: {
    //         // anchor: 'end',
    //         // align: 'end',
    //         formatter: (value: number) => value.toString(),
    //         color:'#fff'
    //       },
    //       legend: {
    //         display: true,
    //         position: "bottom",
    //         align: "center"
    //       }
    //     }
        
    //   },
      
    // });
    

    var ctx = document.getElementById("ASTCRDCBeforeChart");
    var atcrdcdata = new Chart("ASTCRDCBeforeChart", {
      type: "radar",
      data: {
        labels: ['Alignment Score (%)', 'Training Completion Rate (%)', 'Data Compliance (%)'], // Metrics
        datasets: [
          {
            label: 'Before',
            data: [0.66, 0.92, 0.77],
            backgroundColor: 'rgba(66, 165, 245, 0.2)',
            borderColor: '#42a5f5',
            borderWidth: 2,
            pointBackgroundColor: '#42a5f5',
          },
          {
            label: 'After',
            data: [0.94, 0.99, 0.91],
            backgroundColor: 'rgba(245, 66, 227, 0.2)',
            borderColor: 'rgba(245, 66, 227, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(245, 66, 227, 1)',
          },
        ]
        
      },
      options: {
        //  responsive: true,
        scales: {
          r: {
            beginAtZero: true,
           
            ticks: {
              stepSize: 0.5,
              callback: (value) => `${value}%`,
            },
            grid: {
              color: '#e0e0e0',
            },
          },
        },
        responsive:true,
         maintainAspectRatio: false,
       
         plugins: {
          // title: {
          //   display: true,
          //   text: 'Past Alerts and Future Scheduled Actions'
          // },
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          },
          
        }
         
       },
      
    });
    var ctx = document.getElementById("ASTCRDCBeforeChartfirst");
    var atcrdcdatafirst = new Chart("ASTCRDCBeforeChartfirst", {
      type: "radar",
      data: {
        labels: ['Alignment Score (%)', 'Training Completion Rate (%)', 'Data Compliance (%)'], // Metrics
        datasets: [
         
          {
            label: 'Before',
            data: [0.58, 0.75, 0.88],
            backgroundColor: 'rgba(102, 187, 106, 0.2)',
            borderColor: '#66bb6a',
            borderWidth: 2,
            pointBackgroundColor: '#66bb6a',
          },
          {
            label: 'After',
            data: [0.89, 0.82, 0.96],
            backgroundColor: 'rgba(28, 89, 168, 0.2)',
            borderColor: 'rgba(28, 89, 168, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(28, 89, 168, 1)',
          },
          
        ]
        
      },
      options: {
        //  responsive: true,
        scales: {
          r: {
            beginAtZero: true,
          
            ticks: {
              stepSize: 0.5,
              callback: (value) => `${value}%`,
            },
            grid: {
              color: '#e0e0e0',
            },
          },
        },
        responsive:true,
         maintainAspectRatio: false,
       
         plugins: {
          // title: {
          //   display: true,
          //   text: 'Past Alerts and Future Scheduled Actions'
          // },
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          },
          
        }
         
       },
      
    });
    var ctx = document.getElementById("ASTCRDCBeforeChartSecond");
    var atcrdcdatasecond = new Chart("ASTCRDCBeforeChartSecond", {
      type: "radar",
      data: {
        labels: ['Alignment Score (%)', 'Training Completion Rate (%)', 'Data Compliance (%)'], // Metrics
        datasets: [
        
          {
            label: 'Before',
            data: [0.67, 0.81, 0.76],
            backgroundColor: 'rgba(255, 167, 38, 0.2)',
            borderColor: '#ffa726',
            borderWidth: 2,
            pointBackgroundColor: '#ffa726',
          },
          {
            label: 'After',
            data: [0.74, 0.95, 0.85],
            backgroundColor: 'rgba(46, 132, 46, 0.2)',
            borderColor: 'rgba(46, 132, 46, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(46, 132, 46, 1)',
          },
        ]
        
      },
      options: {
        //  responsive: true,
        scales: {
          r: {
            beginAtZero: true,
          
            ticks: {
              stepSize: 0.5,
              callback: (value) => `${value}%`,
            },
            grid: {
              color: '#e0e0e0',
            },
          },
        },
        responsive:true,
         maintainAspectRatio: false,
       
         plugins: {
          // title: {
          //   display: true,
          //   text: 'Past Alerts and Future Scheduled Actions'
          // },
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          },
          
        }
         
       },
      
    });
    var ctx = document.getElementById("ASTCRDCBeforeChartThird");
    var atcrdcdatathird = new Chart("ASTCRDCBeforeChartThird", {
      type: "radar",
      data: {
        labels: ['Alignment Score (%)', 'Training Completion Rate (%)', 'Data Compliance (%)'], // Metrics
        datasets: [
         
          {
            label: 'Before',
            data: [0.65, 0.80, 0.80],
            backgroundColor: 'rgba(171, 71, 188, 0.2)',
            borderColor: '#ab47bc',
            borderWidth: 2,
            pointBackgroundColor: '#ab47bc',
          },
          {
            label: 'After',
            data: [0.66,1.00,0.95],
            backgroundColor: 'rgba(251, 196, 72, 0.2)',
            borderColor: 'rgba(251, 196, 72, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(251, 196, 72, 1)',
          },
        ]
        
      },
      options: {
        //  responsive: true,
        scales: {
          r: {
            beginAtZero: true,
          
            ticks: {
              stepSize: 0.5,
              callback: (value) => `${value}%`,
            },
            grid: {
              color: '#e0e0e0',
            },
          },
        },
        responsive:true,
         maintainAspectRatio: false,
       
         plugins: {
          // title: {
          //   display: true,
          //   text: 'Past Alerts and Future Scheduled Actions'
          // },
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          },
          
        }
         
       },
      
    });
    var ctx = document.getElementById("ASTCRDCBeforeChartFour");
    var atcrdcdatafour = new Chart("ASTCRDCBeforeChartFour", {
      type: "radar",
      data: {
        labels: ['Alignment Score (%)', 'Training Completion Rate (%)', 'Data Compliance (%)'], // Metrics
        datasets: [
         
          {
            label: 'Before',
            data: [0.51, 0.82, 0.92],
            backgroundColor: 'rgba(171, 71, 188, 0.2)',
            borderColor: '#ab47bc',
            borderWidth: 2,
            pointBackgroundColor: '#ab47bc',
          },
          {
            label: 'After',
            data: [0.82,0.87,0.94],
            backgroundColor: 'rgba(72, 251, 141, 0.2)',
            borderColor: 'rgb(89, 181, 77)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(251, 196, 72, 1)',
          },
        ]
        
      },
      options: {
        //  responsive: true,
        scales: {
          r: {
            beginAtZero: true,
          
            ticks: {
              stepSize: 0.5,
              callback: (value) => `${value}%`,
            },
            grid: {
              color: '#e0e0e0',
            },
          },
        },
        responsive:true,
         maintainAspectRatio: false,
       
         plugins: {
          // title: {
          //   display: true,
          //   text: 'Past Alerts and Future Scheduled Actions'
          // },
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          },
          
        }
         
       },
      
    });


    var ctx = document.getElementById("FRTASChart");
    var feedbacsk = new Chart("FRTASChart", {
      type: "scatter",
      data: {
       // labels: ["Oct-23", "Nov-23", "Dec-23","Jan-24","Feb-24","Mar-24","Apr-24","May-24","Jun-24","Jul-24","Aug-24","Sep-24"],
        datasets: [
          {
            label: 'Providers',
            data: [
              { x: 1, y: 0.99, label: 'Provider A' }, // Feedback Response Time = 2, Alignment Score = 90
              { x: 1.65, y: 0.90, label: 'Provider B' }, // Feedback Response Time = 5, Alignment Score = 78
              { x: 2, y: 0.82, label: 'Provider C' }, // Feedback Response Time = 1, Alignment Score = 95
              { x: 1, y: 1.00, label: 'Provider D' }, // Feedback Response Time = 3, Alignment Score = 83
              { x: 5, y: 0.74, label: 'Provider E' }, // Feedback Response Time = 3, Alignment Score = 83
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color for data points
            borderColor: 'rgba(54, 162, 235, 1)', // Darker blue for border
            borderWidth: 2,
            pointRadius: 5, // Size of the scatter plot poin
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
              text: 'Feedback Response Time (Days)',
            
            },
            max: 6,  // Max score is 10
            ticks: {
             
            },
          },
          y: {
            title: {
              display: true,
              text: 'Alignment Score (%)',
            },
            // ticks: {
            //   beginAtZero: true, // Start the Y-axis from 0 if necessary
            // },
          },
        },
         plugins: {
          // title: {
          //   display: true,
          //   text: 'Past Alerts and Future Scheduled Actions'
          // },
          legend: {
            display: true,
            position: "bottom",
            align: "center"
          },
          
        }
         
       },
      
    });


    var ctx = document.getElementById("QPPTCRChart");
    var qualityProgramm = new Chart("QPPTCRChart", {
      type: 'bar', // Bar chart
      data: {
        labels: ['Provider A', 'Provider B', 'Provider C', 'Provider D'], // Providers
        datasets: [
          {
            label: 'Quality Program Participation (Before)',
            data: [50, 60, 55, 60], // Before values
            backgroundColor: '#278327',
            borderColor: '#278327',
            borderWidth: 1,
          },
          {
            label: 'Quality Program Participation (After)',
            data: [90, 95, 100, 100], // After values
            backgroundColor: '#278327',
            borderColor: '#278327',
            borderWidth: 1,
          },
          {
            label: 'Training Completion Rate (%) (Before)',
            data: [60, 62, 65, 60], // Before values
            backgroundColor: 'rgba(52, 85, 164, 0.5)',
            borderColor: '#3455a4',
            borderWidth: 1,
          },
          {
            label: 'Training Completion Rate (%) (After)',
            data: [90, 95, 100, 100], // After values
            backgroundColor: '#3455a4',
            borderColor: '#3455a4',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              //text: 'Providers',
            },
            stacked: false,
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)',
            },
            ticks: {
              callback: (value) => `${value}%`,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "center",
          },
          datalabels: {
            // anchor: 'end',
            // align: 'end',
            formatter: (value: number) => value.toString(),
            color:'#fff'
          },
        },
      },
    });
  }
}
