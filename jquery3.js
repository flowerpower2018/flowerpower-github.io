alert("click_me");
 $(document).ready(function(){
   var button = $("click_me");
   button.on('click' , function(){
     console.log("setting button as clicked");
     $this.html("clicked");
   })
 })
 $(document).ready(function(){
   function say Imclicked(){
     $(this).html("clicked!");
   }
   $("click_me").on ('click' sayImclicked);
   $("click_me_also").on ('click' sayImclicked);
 })
})
