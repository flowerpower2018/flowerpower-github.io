$(document).ready(function(){

/*! Fades in page on load */
$('body').css('display', 'none');
$('body').fadeIn(1000);

});
/*! Other links go transparent when mouse hovers on a member's image*/
$("#teamfp").mouseover(function(){
    $("#pictures").fadeTo("medium", 0.5);
});
$("#teamfp").mouseout(function(){
    $("#pictures").fadeTo("medium", 1);
});

$("teamfp") .hover(function() {
  $("#pictures").fadeTo("medium", 0.5);
  ;color: #ef4aef;
  text-decoration: underline;
})
