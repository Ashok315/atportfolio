
function responsive_menu(){
    var menu=document.getElementById('menulist');
    var logo=document.getElementById('logo1');
 var header=document.querySelector('header');
 header.classList.toggle('h-height');
  
 

    if(menu.style.display == "block"){
      menu.style.display = "none";
      logo.style.display="block";
      // header.className="h-height";
    }
    else{
      menu.style.display="block";
      logo.style.display="none";
      // header.className-="h-height";

    }
  
 
 }

 function resume(){
   var r=document.getElementById('cv-btn')
   
 }
 //  var header=document.querySelector('header');
//  var hamburger=document.querySelector('hamburger');

//  hamburger.addEventListner('click',function(){
//   header.classList.toggle('h-height');
// })