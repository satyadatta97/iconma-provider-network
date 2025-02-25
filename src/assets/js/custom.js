  // window.onload=function(){
  // let arrow = document.querySelectorAll(".arrow");
  //   for (var i = 0; i < arrow.length; i++) {
  //     arrow[i].addEventListener("click", (e)=>{
  //   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
  //   arrowParent.classList.toggle("showMenu");
  //     });
  // }
  // }
  // window.onload = function () {
  //   let menuLinks = document.querySelectorAll(".iocn-link");
  
  //   menuLinks.forEach(link => {
  //     link.addEventListener("click", (e) => {
  //       let arrowParent = e.target.closest("li"); // Get the closest <li> parent of the clicked <div class="iocn-link">
  //       arrowParent.classList.toggle("showMenu");
  //     });
  //   });
  // }

  // window.onload = function () {
  //   let menuLinks = document.querySelectorAll(".iocn-link");
  
  //   menuLinks.forEach(link => {
  //     link.addEventListener("click", (e) => {
  //       let clickedLi = e.target.closest("li"); // Get the clicked <li> element
  //       let allLiItems = document.querySelectorAll(".nav-links > li"); // Get all <li> items in nav-links
  
  //       // Close all other submenus by removing 'showMenu' class
  //       allLiItems.forEach(item => {
  //         if (item !== clickedLi) {
  //           item.classList.remove("showMenu");
  //         }
  //       });
  
  //       // Toggle the clicked <li>'s submenu
  //       clickedLi.classList.toggle("showMenu");
  //     });
  //   });
  // }
  window.onload = function () {
    let menuLinks = document.querySelectorAll(".iocn-link");
  
    menuLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        let clickedLi = e.target.closest("li"); // Get the clicked <li> element
        let allLiItems = document.querySelectorAll(".nav-links > li"); // Get all <li> items in nav-links
  
        // Check if the clicked <li> is already active
        if (clickedLi.classList.contains("showMenu")) {
          // If the clicked item is already open, close it
          clickedLi.classList.remove("active");
          clickedLi.classList.remove("showMenu");
        } else {
          // Otherwise, close all other <li> items
          allLiItems.forEach(item => {
            item.classList.remove("active");
            item.classList.remove("showMenu");
          });
  
          // Add 'active' and 'showMenu' class to the clicked <li>
          clickedLi.classList.add("active");
          clickedLi.classList.add("showMenu");
        }
      });
    });
  }
    //  const ctx = document.getElementById("canvas").getContext("2d");
  // window.myBar = new Chart(ctx, {
  //   type: 'funnel',
  //   data: {
  //     labels: ['Step 1', 'Step 2', 'Step 3'],
  //     datasets: [{
  //       data: [1, 0.75, 0.5]
  //     }]
  //   },
  //   options: {
  //     indexAxis: 'y',
  //     title: {
  //       display: true,
  //       text: 'Chart.js Funnel Chart'
  //     }
  //   },
  //   plugins: [ChartDataLabels],
  // });