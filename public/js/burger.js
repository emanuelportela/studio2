
// Hamburger Menu

let hamburger = document.getElementById('burger');

hamburger.addEventListener("click", function () { 
  
   var burgerDiv = document.querySelector(".burger-1");
   var burger2 = document.querySelector(".responsive i");
   var burger3 = document.querySelector(".header-section");

   if (hamburger.classList.contains("afficher")) {
      burger.classList.remove("afficher");
      burgerDiv.style.display="none";
      burger2.classList.remove("responsiva");
      burger2.classList.remove("clicked-2");
      burger3.classList.remove("clicked");
   } 

   else {
      burger.classList.add("afficher")
      burgerDiv.style.display="initial"; 
      burger2.classList.add("responsiva");
      burger2.classList.add("clicked-2");
      burger3.classList.add("clicked");
   }
})

// // Word1

// let W1 = document.getElementById('word1');

// W1.addEventListener("click", function () { 
  
//    var burgerDiv = document.querySelector(".burger-1");
//    burgerDiv.style.display="none"; 
 
// })


// // Word2

// let W2 = document.getElementById('word2');

// W2.addEventListener("click", function () { 
  
//    var burgerDiv = document.querySelector(".burger-1");
//    burgerDiv.style.display="none"; 
 
// })

// // Word3

// let W3 = document.getElementById('word3');

// W3.addEventListener("click", function () { 
  
//    var burgerDiv = document.querySelector(".burger-1");
//    burgerDiv.style.display="none"; 
 
// })


// // Word4

// let W4 = document.getElementById('word4');

// W4.addEventListener("click", function () { 
  
//    var burgerDiv = document.querySelector(".burger-1");
//    burgerDiv.style.display="none"; 
 
// })


// // Word5

// let W5 = document.getElementById('word5');

// W5.addEventListener("click", function () { 
  
//    var burgerDiv = document.querySelector(".burger-1");
//    burgerDiv.style.display="none"; 
 
// })

