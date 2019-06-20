
/* BARRE NAV AU SCROLL (start) */

window.onscroll = () => {
   
   const nav = document.querySelector('.header-2');
   const box = document.querySelector('.box');
   const burger = document.querySelector('.responsive i');
   const burger2 = document.querySelector('.burger-1');
   
   
   if (this.scrollY > 0) {
      nav.classList.add("scroll");
      box.classList.add("scroll-box");
      burger.classList.add("responsiva");
      burger2.classList.add("scroll2");

   } else {
      nav.classList.remove("scroll");
      box.classList.remove("scroll-box");
      burger.classList.remove("responsiva");
      burger2.classList.remove("scroll2");
   }
};
