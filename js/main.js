$(document).ready(function() {
  $("nav a").on("click", function() {
  
    var href = $(this).attr("href");
    
    var t = $(href).offset().top;
    
    $("body").animate({
      scrollTop: t            
    }, 750);
    
    return false;
    
  });
});