$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".appear").click(function(){
    $("#dog-showing").fadeToggle();
    $("#dog-hidden").fadeToggle();
  });

  $(".here").click(function(){
    $("#el-showing").slideToggle();
    $("#el-hidden").slideToggle();
  });
});