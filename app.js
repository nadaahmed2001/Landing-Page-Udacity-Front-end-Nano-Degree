const sections= document.querySelectorAll('section');
const navbar = document.querySelector("#navbar__list");
navnav=document.getElementById('navbar__menu');
const topOfNav = navnav.offsetTop;
let navLi=document.querySelectorAll('null');


// dynamically creating the navigation menu 
/*--1-create a function--*/
function dynamicNav() {
    /*--2-loop over all the sections--*/
    sections.forEach((section) => {
        /*--3-store the sections' ids and attributes in variables--*/
        //The data-* attribute gives us the ability to embed custom data attributes on all HTML elements
        const sectionName = section.getAttribute('data-nav');
        const sectionId = section.getAttribute('id');
        /* 4-Create li element for each section */
        const newitem = document.createElement('li'); 
        //Add the anchor to the new listItem
        newitem.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionName}</a>`;
        //Add listItem to the Navbar
        navbar.appendChild(newitem);
        navLi=document.querySelectorAll('ul li');
    });
} 


//--------Sticky navbar--------
document.addEventListener('scroll',function(){
    // Add the sticky class to the navbar when scrolling. Remove it when stop scrolling
                if (pageYOffset >= topOfNav) {
                    navnav.classList.add('sticky');
                } else {
                    navnav.classList.remove('sticky');
                }
});


//--------add active class--------
document.addEventListener('scroll',function setActiveClass(){
 // for (let i=0; i < sections.length; i++){
  let currentSection='';
    sections.forEach(section=>{
      const sectionTop= section.offsetTop;
      const sectionHeight= section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset< sectionTop+ sectionHeight){
        currentSection=section.getAttribute('id');
      }
    })


  navLi.forEach(Li=>{
   if((Li.textContent).replace(/\s+/g, '')===(currentSection)){
     //the .replace() method remove white spaces from the string so that it can be compared with currentsection that has no white space
     //The /\s+/g regex pattern will match all whitespace characters. 
     Li.classList.add('active');
    }else{
      Li.classList.remove('active');
    }
  })
});


//Clicking on a navigation item should scroll to the appropriate section of the page
  function scrollTo(event) {
    anchorlinks.forEach(anchor => {
      if (anchor === event.target) {
        event.preventDefault();
        document.querySelector(event.target.getAttribute('href')).scroll({behavior: "smooth"});
      }
    })
  }
  

dynamicNav();

