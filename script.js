$ (document).ready (function() {

   function sayImClicked() {
     $(this).html("Clicked!");
   }

   $("#click-me").on('click', sayImClicked);
   console.log("blah");
})
