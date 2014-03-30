$(document).ready(function() {
  $("nav a").on("click", function() {
  
    var href = $(this).attr("href");
    
    var t = $(href).offset().top;
    
    $("body").animate({
      scrollTop: t            
    }, 750);
    
    return false;
    
  });
  
  $("#mfk").waypoint(function(direction) {

    if (direction == "down") {
      $(".about-bg").removeClass("show");
      $(".mfk-bg").addClass("show");
      
    } else {
      $(".mfk-bg").removeClass("show");
      $(".about-bg").addClass("show");
    }
    
  }, { offset: 200});
  
  $("#awol").waypoint(function(direction) {

    if (direction == "down") {
      $(".mfk-bg").removeClass("show");
      $(".awol-bg").addClass("show");
      
    } else {
      $(".awol-bg").removeClass("show");
      $(".mfk-bg").addClass("show");
    }
    
  }, { offset: 200});
  
  $("#love").waypoint(function(direction) {

    if (direction == "down") {
      $(".awol-bg").removeClass("show");
      $(".love-bg").addClass("show");
      
    } else {
      $(".love-bg").removeClass("show");
      $(".awol-bg").addClass("show");
    }
    
  }, { offset: 200});
  
  
  /*
$("#about-wheelhouse").waypoint(function(direction) {

    if (direction == "down") {
      $(".logo").html("<img class=\"logo-flag\" src=\"images/wheelhouse-pictures-logo-white.svg\" alt=\"wheelhouse-pictures-flag\" onerror=\"this.onerror = null; this.src = 'images/wheelhouse-pictures-logo-white.png'\">");
      $(".about-bg").addClass("show");
      
    } else {
      $(".logo").html("<img class=\"logo-flag\" src=\"images/wheelhouse-pictures-logo-navy.svg\" alt=\"wheelhouse-pictures-flag\" onerror=\"this.onerror = null; this.src = 'images/wheelhouse-pictures-logo-navy.png'\">");
      $(".about-bg").removeClass("show");
    }
    
  }, { offset: 200});
*/

  
  /*
$("#current-slate section").waypoint(function(direction) {
  
    if (direction == "down") {
      
      // find the id of the particular section we just scrolled on
      var id = $(this).attr("id");  
      
    } else {
      
      // find the id of the PREVIOUS section we scrolled on
      var id = $(this).prev().attr("id");
      
    }
    
    var bg = $("." + id + "-bg");
    
    $(".logo-area").addClass("stick-bg");
    console.log("." + id + "-bg");
    
    var nav = $("nav a[href=" + id + "]");
    
    nav.addClass("selected");
    
    nav.siblings().removeClass("selected");
    
  }, { offset: 200});
*/
  
  
  
  
});