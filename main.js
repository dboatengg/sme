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

/****display today's date****/
function display_ct5(){
  const today = new Date();
  const hours = today.getHours()%12;
  const ampm = (hours >=12)?'AM':'PM';
  const hour = (today.getHours()) ? hours : 12;
  const hourD =  hour.toString().length===1? 0+hour.toString() : hour;
  
  const minutes = today.getMinutes();
  const minute = minutes.toString().length===1 ? '0'+minutes : minutes;

  const seconds = today.getSeconds();
  const second = seconds.toString().length===1 ? '0'+seconds : seconds;

  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const month = today.getMonth();
  const date = (monthList[month])+' '+today.getDate()+', '+today.getFullYear();
  const time = hourD+":"+minute+":"+second+" "+ampm;


  const datetime = date +" - "+time;
  document.getElementById('ct5').innerHTML = datetime;

  display_c5();

}

function display_c5(){
  setTimeout(()=>{display_ct5()},1000)
}

display_c5();





/****swiperjs******/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed:600,
  parallax: true,
  loop: false,
  autoplay: true,
  mousewheel: true,
  keyboard: true,
  cssMode: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

