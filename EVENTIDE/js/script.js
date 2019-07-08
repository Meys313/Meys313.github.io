/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {

  document.getElementById("selectPlanList").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.selectPlan-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
var selectBtn = document.querySelector('.selectPlan-btn');

var selectPlanSpan = document.querySelectorAll('.selectPlanPrice')

for(i=0; i<selectPlanSpan.length; i++){
  selectPlanSpan[i].onclick = function(){
   selectBtn.innerHTML = selectPlanSpan[i].innerHTML;
   
  }
}








// EVENT ACCORDION 

var acc = document.getElementsByClassName("event-accordion-item");
var i;
 
for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var fas = this.querySelector('.eventAccordion-icon');
    if(fas.classList.contains("fa-plus-circle")){
      fas.classList.remove("fa-plus-circle");
    }
    else{
      fas.classList.add("fa-plus-circle");
    }
        fas.classList.toggle("fa-minus-circle");
    
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
       panel.style = 'margin-top: 0px; margin-bottom: 0px';
    } else {
       panel.style = 'margin-top: 25px; margin-bottom: 25px';
      panel.style.maxHeight = panel.scrollHeight + "px";

    } 
  });
}

// btnBars.addEventListener('click', e => {
//     e.preventDefault();
//     menu.classList.add('menu-active');
//     btnClose.style = 'opacity:1; transition: opacity 1s;';
//     btnBars.style = 'opacity:0; transition: opacity .3s;';
//     counter.style = 'opacity:0; transition: opacity .5s;';
// })