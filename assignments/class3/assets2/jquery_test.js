

    var myFooter = $("footer");
    var mydiv = $(".div");

    myFooter.on("mouseenter", function(){
        mydiv.fadeIn();
    }).on("mouseleave", function(){
        mydiv.fadeOut();

    })

    ;


}
