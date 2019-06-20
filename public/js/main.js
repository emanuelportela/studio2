
/* BARRE NAV AU SCROLL (start) */

window.onscroll = () => {
   
   const box = document.querySelector('.box');
   const nav = document.querySelector('.header-section');
   const navbar1 = document.querySelector('.navbarli1');
   const navbar2 = document.querySelector('.navbarli2');
   const navbar3 = document.querySelector('.navbarli3');
   const burger = document.querySelector('.responsive i');
   
   
   if (this.scrollY > 0) {
      nav.classList.add("scroll");
      box.classList.add("scroll-box");
      navbar1.classList.add("scrolled");
      navbar2.classList.add("scrolled");
      navbar3.classList.add("scrolled");
      burger.classList.add("responsiva");

   } else {
      nav.classList.remove("scroll");
      box.classList.remove("scroll-box");
      navbar1.classList.remove("scrolled");
      navbar2.classList.remove("scrolled");
      navbar3.classList.remove("scrolled");
      burger.classList.remove("responsiva");
   }
};

/* BARRE NAV AU SCROLL (end) */


// /* VITESSE CAROUSEL (start) */

// $('.carouselslider').carousel({
//    interval: 1000
// })

// $('.carouselslider2').carousel({
//    interval: 1000
// })

// /* VITESSE CAROUSEL (end)*/