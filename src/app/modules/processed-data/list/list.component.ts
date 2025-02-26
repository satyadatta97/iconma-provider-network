import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  constructor(private router: Router) { }
  ngOnInit() {}
boxes = [
  { text: "Unprocessed Data", status: "pending" ,imageUrl : '../assets/img/unprocessesdata.svg'},
  { text: "Processed Data", status: "pending",imageUrl : '../assets/img/Processing_data.svg' },
  { text: "Results", status: "pending",imageUrl : '../assets/img/Generate_dashboard.svg' },
 
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
      }

    }, (index) * 3000); // Change every 10 seconds
     
    
    
  });
 
}
selectBox(event:any,index:any,box:any){
console.log(box);

if(box.text == "Unprocessed Data"){
this.router.navigate(['/unprocessed-data']);
}
if(box.text == "Processed Data"){
  this.router.navigate(['/processed-data']);
  }
  if(box.text == "Results"){
    this.router.navigate(['/results']);
    }
   
}

}
