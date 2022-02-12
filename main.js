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
}, 12000);

close.addEventListener('click', ()=>{
  modalContainer.classList.remove('show');
})

/****display today's date****/
function display_ct5(){
  const today = new Date();
  // const hours = today.getHours()%12;
  // const ampm = (hours >=12)?'AM':'PM';
  // const hour = (today.getHours()) ? hours : 12;
  // const hourD =  hour.toString().length===1? 0+hour.toString() : hour;
  
  // const minutes = today.getMinutes();
  // const minute = minutes.toString().length===1 ? '0'+minutes : minutes;

  // const seconds = today.getSeconds();
  // const second = seconds.toString().length===1 ? '0'+seconds : seconds;


  // var now = new Date();
  var TwentyFourHour = today.getHours();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  var mid = 'PM';
  if (min < 10) {
    min = "0" + min;
  }
  if (hour > 12) {
    hour = hour - 12;
  }    
  if(hour==0){ 
    hour=12;
  }

//Adding '0' in front of minute and seconds when they are a single number
const secTime = sec.toString().length === 1?'0'+sec: sec;
const minTime = min.toString().length === 1?'0'+min: min;
    
  if(TwentyFourHour < 12) {
     mid = 'AM';
  }     
  // else {mid = 'PM'}
// document.getElementById('currentTime').innerHTML =     hour+':'+minTime+':'+secTime +' '+mid ;

// setTimeout(clock, 1000);}

  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const month = today.getMonth();
  const date = (monthList[month])+' '+today.getDate()+', '+today.getFullYear();
  const time = hour+":"+minTime+":"+secTime+" "+mid;

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
  speed:700,
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


// swiper 1 
const swiper1 = new Swiper('.swiper1', {
  autoplay: false,
  loop: false,

  pagination: {
    el: '.swiper-pagination1',
    dynamicBullets: true,
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
});


//hide loader when window loads and add 2 seconds to loading time
window.addEventListener('load',setTimeout(() => {
  document.querySelector('.loader-content').classList.add('hide');
}, 2000)
);



// smooth scroll 
seamless.polyfill();
seamless.windowScrollBy(window,{ behavior:'smooth', top:200,left:0});
seamless.elementScrollIntoView(document.querySelector("#target"), {
  behavior: 'smooth',
  block: 'center',
  inline: 'center',
})