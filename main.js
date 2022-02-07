const accordion = document.getElementsByClassName('container');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-menu__link");
const backToTopButton = document.querySelector(".back-to-top");
const body = document.getElementsByTagName('body');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

/****nav bar*****/
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('lock-scroll')
}


navLink.forEach((n) => n.addEventListener("click", removeOverflow));


/*****add the overflow function******/
function removeOverflow() {
  document.body.classList.remove('lock-scroll')
}



navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/*******Back to top******/
const showOnPx = 100;

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
});


/*****scroll to top when user clicks on scroll-to-top*****/
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: 'smooth'
  });
};

/****invoke function whenever scroll-to-top button is clicked****/
backToTopButton.addEventListener("click", goToTop)



//modal
const close = document.querySelector('.close');
const modalContainer = document.querySelector('.modal');


setTimeout(() => {
  modalContainer.classList.add('show');
}, 8000);

close.addEventListener('click', ()=>{
  modalContainer.classList.remove('show');
})

/*****loader****/ 
// window.onload = function(){
//   document.getElementById("loader-container").style.display="none"
// }
window.addEventListener('load',()=>{
    document.getElementById("loader-container").style.display="none"
})