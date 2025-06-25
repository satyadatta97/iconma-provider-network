import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit{
  startFlag : boolean = true;
 viewFlag : boolean = false;
  constructor(private router: Router) { }
  ngOnInit() {}
  boxes = [
    { text: "Fetching Data", status: "pending" ,imageUrl : '../assets/img/Fetching_data.svg'},
    { text: "Masking Data", status: "pending" ,imageUrl : '../assets/img/masking-data.svg'},
    { text: "Processing Data", status: "pending",imageUrl : '../assets/img/Processing_data.svg' },
    { text: "Cleaning Data", status: "pending",imageUrl : '../assets/img/data-cleaning.svg' },
    { text: "Exploratory Data Analysis", status: "pending",imageUrl : '../assets/img/exploratory-analysis.svg' },
    { text: "Feature Engineering", status: "pending",imageUrl : '../assets/img/future-engineering.svg' },
    { text: "Models & Algorithms", status: "pending",imageUrl : '../assets/img/Running_algorithms.svg' },
    { text: "Generating Dashboard", status: "pending",imageUrl : '../assets/img/Generate_dashboard.svg' },
    { text: "Done", status: "pending",imageUrl : '../assets/img/Done.svg' },
  ];
  
  currentIndex = -1; // No process started

  startProcess() {
    this.currentIndex = -1;

    this.boxes.forEach((box, index) => {
      setTimeout(() => {
        this.currentIndex = index;
        
        // ✅ Ensure last box STAYS GREEN permanently
        if (index === this.boxes.length - 1) {
          this.currentIndex = index ; // Keep it at last index
          this.currentIndex = index ; // Keep it at last index
          this.currentIndex = 0 ; // Keep it at last index
          this.currentIndex = index + 1 ;
           this.startFlag = false;
           this.viewFlag = true;
        }

      }, (index) * 3000); // Change every 10 seconds
       
      
      
    });
   
  }
  selectBox(event:any,index:any,box:any){
console.log(box);

if(box.text == "Fetching Data"){
  this.router.navigate(['/main/fetching-data']);
  }
  if(box.text == "Processing Data"){
    this.router.navigate(['/main/processing-data']);
    }
    if(box.text == "Running Algorithms"){
      this.router.navigate(['/main/running-algorithms']);
      }
      if(box.text == "Generating Dashboard"){
        this.router.navigate(['/results']);
        }
        if(box.text == "Done"){
          this.router.navigate(['/main/done']);
          }
  }
}
