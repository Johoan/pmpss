$(function() {
    $("#open-form").click(function(){ 
      $(".contact").addClass("open-form");
    });
    });
    
    $(function() {
    $("#submit").click(function(){ 
      setTimeout('jQuery(".contact").removeClass("open-form")', 3000);
      setTimeout('jQuery(".thanks").removeClass("visible")', 3000);
    });
    });
    
    $(function() {
    $("#submit").click(function(){ 
      $(".thanks").addClass("visible");
    });
    });
    
    $(function() {
    $(".close").click(function(){ 
      $(".contact").removeClass("open-form");
    });
    });