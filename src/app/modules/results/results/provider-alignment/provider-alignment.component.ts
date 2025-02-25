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

    var ctx = document.getElementById("ASTCRDCBeforeChart");
    var atcrdcdata = new Chart("ASTCRDCBeforeChart", {
      type: "radar",
      data: {
        labels: ['Alignment Score (%)', 'Training Completion Rate (%)', 'Data Compliance (%)'], // Metrics
        datasets: [
          {
            label: 'Before',
            data: [70, 53, 67],
            backgroundColor: 'rgba(66, 165, 245, 0.2)',
            borderColor: '#42a5f5',
            borderWidth: 2,
            pointBackgroundColor: '#42a5f5',
          },
          {
            label: 'After',
            data: [105, 83, 92],
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
              stepSize: 30,
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
            data: [61, 78, 60],
            backgroundColor: 'rgba(102, 187, 106, 0.2)',
            borderColor: '#66bb6a',
            borderWidth: 2,
            pointBackgroundColor: '#66bb6a',
          },
          {
            label: 'After',
            data: [78, 85, 85],
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
              stepSize: 30,
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
            data: [67, 70, 69],
            backgroundColor: 'rgba(255, 167, 38, 0.2)',
            borderColor: '#ffa726',
            borderWidth: 2,
            pointBackgroundColor: '#ffa726',
          },
          {
            label: 'After',
            data: [95, 100, 99],
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
              stepSize: 30,
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
            data: [58, 67, 64],
            backgroundColor: 'rgba(171, 71, 188, 0.2)',
            borderColor: '#ab47bc',
            borderWidth: 2,
            pointBackgroundColor: '#ab47bc',
          },
          {
            label: 'After',
            data: [83, 95, 92],
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
              stepSize: 30,
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
              { x: 2, y: 90, label: 'Provider A' }, // Feedback Response Time = 2, Alignment Score = 90
              { x: 5, y: 78, label: 'Provider B' }, // Feedback Response Time = 5, Alignment Score = 78
              { x: 1, y: 95, label: 'Provider C' }, // Feedback Response Time = 1, Alignment Score = 95
              { x: 3, y: 83, label: 'Provider D' }, // Feedback Response Time = 3, Alignment Score = 83
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
  }
}
