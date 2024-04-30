$(document).ready(function() {
    console.log("Bonjour");
    let toggle = $("#toggle");
    let mode=$("#mode");
    let indicator=$("#indicator");
    let navbar=$("#navbar");
    let logo=$("#logo");
    toggle.on("click", function() {
      if (toggle.hasClass("active")){
      toggle.removeClass("active");
      navbar.removeClass("active");
      mode.attr("src","../ICÔNES/TOKY/lunes .png");
      logo.attr("src","../IMAGES/b-logo-zip-file/png/logo-no-background.png");
      
    }else { 
      toggle.addClass("active");
      navbar.addClass("active");
      mode.attr("src","../ICÔNES/TOKY/symbole-de-temps-soleil.png");
      logo.attr("src","../IMAGES/b-logo-zip-file/png/logo-white.png");
    } 
    });
  });