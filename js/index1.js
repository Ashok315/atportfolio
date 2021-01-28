function loadFunction(){
 var preloader=document.getElementById('loading');
    preloader.style.display="none";
}

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
  $(document).on("click","a.li",function(){
    $("a.li").removeClass("active");    
      $(this).addClass("active");   
  })
