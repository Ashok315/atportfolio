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

  //form-messege

  window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("msg-drop");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("response");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks! Your message has been successfully sent";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  