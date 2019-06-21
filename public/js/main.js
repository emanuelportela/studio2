
/* BARRE NAV AU SCROLL (start) */

window.onscroll = () => {
   
   const nav = document.querySelector('.header-2');
   const box = document.querySelector('.box');
   const burger = document.querySelector('.responsive i');
   const burger2 = document.querySelector('.burger-1');
   var nonactive1 = document.querySelector('.nonactive1');
   var nonactive2 = document.querySelector('.nonactive2');
   var nonactive3 = document.querySelector('.nonactive3');
   var nonactive4 = document.querySelector('.nonactive4');
   var nonactive5 = document.querySelector('.nonactive5');
   
   
   if (this.scrollY > 0) {
      nav.classList.add("scroll");
      box.classList.add("scroll-box");
      burger.classList.add("responsiva");
      burger2.classList.add("scroll2");
      nonactive1.classList.add("nonactiveblack");
      nonactive2.classList.add("nonactiveblack");
      nonactive3.classList.add("nonactiveblack");
      nonactive4.classList.add("nonactiveblack");
      nonactive5.classList.add("nonactiveblack");

   } else {
      nav.classList.remove("scroll");
      box.classList.remove("scroll-box");
      burger.classList.remove("responsiva");
      burger2.classList.remove("scroll2");
      nonactive1.classList.remove("nonactiveblack");
      nonactive2.classList.remove("nonactiveblack");
      nonactive3.classList.remove("nonactiveblack");
      nonactive4.classList.remove("nonactiveblack");
      nonactive5.classList.remove("nonactiveblack");
   }
};
