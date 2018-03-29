/*! Link goes transparent when mouse hovers */
$("#enter").mouseover(function(){
    $("#enter").fadeTo("medium", 0.5);
});
$("#enter").mouseout(function(){
    $("#enter").fadeTo("slow", 1);
});
