console.log("Hello")
$(document).ready(function(){
  $(".indexpic").on('mouseover', function(){
    $(this).width(200).height(200);
  })
  $(".indexpic").on('mouseout', function(){
    $(this).width(100).height(100);
  })
});
