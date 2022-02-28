const accordion = document.getElementsByClassName('container');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-menu__link");
const backToTopButton = document.querySelector(".back-to-top");
const body = document.getElementsByTagName('body');


for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

/****nav bar*****/

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('lock-scroll')
}
navLink.forEach((n) => n.addEventListener("click", removeOverflow));
navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("click", mobileMenu);




/*****remove lock scroll******/
function removeOverflow() {
    document.body.classList.remove('lock-scroll')
}


/****lock body when nav-menu is active*****/
function lockScroll() {
    document.body.classList.add('lock-scroll');
}

/******close navmenu ******/
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/*******Back to top******/
$(document).ready(function() {
    $(document).scroll(function() {
        let scroll = $(document).scrollTop();
        if (scroll > 2000) {
            $('.back-to-top').addClass('activee').fadeIn('slow');
        } else {
            $('.back-to-top').removeClass('activee').fadeOut('slow');
        }
    })
})












/***Slow down back-to-top speed******/

// Bind your button click, scroll direction and effect speed
backToTopButton.onclick = function() {
    scrollTo(0, 500); // it will take 0.8 seconds to reach to top.

}

// Element to move, time in ms to animate
function scrollTo(element, duration) {
    var e = document.documentElement;
    if (e.scrollTop === 0) {
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if (typeof from === "object") from = from.offsetTop;
    if (typeof to === "object") to = to.offsetTop;

    scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element.scrollTop = xTo;
        return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;
    debugger;
    setTimeout(function() {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}

function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}










/*****fucntionality for modal***********/
const close = document.querySelector('.close');
const modalContainer = document.querySelector('.modal');


setTimeout(() => {
    modalContainer.classList.add('show');
}, 12000);

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})












/****display today's date****/
function display_ct5() {
    const today = new Date();
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
    if (hour == 0) {
        hour = 12;
    }

    //Adding '0' in front of minute and seconds when they are a single number
    const secTime = sec.toString().length === 1 ? '0' + sec : sec;
    const minTime = min.toString().length === 1 ? '0' + min : min;

    if (TwentyFourHour < 12) {
        mid = 'AM';
    }

    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = today.getMonth();
    const date = (monthList[month]) + ' ' + today.getDate() + ', ' + today.getFullYear();
    const time = hour + ":" + minTime + ":" + secTime + " " + mid;

    const datetime = date + " - " + time;
    document.getElementById('ct5').innerHTML = datetime;

    display_c5();

}

function display_c5() {
    setTimeout(() => { display_ct5() }, 1000)
}

display_c5();













/****swiperjs******/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 700,
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
window.addEventListener('load', () => setTimeout(() => {
    document.querySelector('.loader-content').classList.add('hide');
}, 1500));







/******functionality for accordion*******/
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});