const accordion = document.getElementsByClassName('container');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('lock-scroll')
}


navLink.forEach((n) => n.addEventListener("click", removeOverflow));


//add the overflow function
function removeOverflow() {
  document.body.classList.remove('lock-scroll')
}