let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};

const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  const currentScrollTop = window.pageYOffset;
  
  if (currentScrollTop > lastScrollTop && currentScrollTop > headerHeight) {
    // Hide header on scroll down
    header.style.top = "-" + headerHeight + "px";
  } else {
    // Show header on scroll up
    header.style.top = "0px";
  }
  
  lastScrollTop = currentScrollTop;
});