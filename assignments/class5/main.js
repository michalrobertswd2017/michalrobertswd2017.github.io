$(function(){
    var myHamburger = $("hamburger");
    var myaside = $(".aside");

});
$myHamburger.on("mouseover", function(){
        $(this).find("aside").animate(
            {height: "100px"},
            {queue: false,
             duration: 500,
             easing: "linear",
             start: function(){
                 $(this).css("slideIn")
             }
            }
            );

}).on("mouseleave", function(){
        $(this).find("aside").animate(
            {height: "0px"},
            {queue: false,
             duration: 500,
             easing: "linear",
             complete: function(){
                 $(this).css("slideOut);
             }
            }

        );
    });
});
