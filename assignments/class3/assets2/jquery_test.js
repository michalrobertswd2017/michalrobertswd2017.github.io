$(function(){
    var myFooter = $("footer");
    var mydiv = $(".div");

    myFooter.on("mouseenter", function(){
        //alert("hi!");
        mydiv.fadeIn();
    }).on("mouseleave", function(){
        mydiv.fadeOut();

    });


});
