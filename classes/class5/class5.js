$(function(){

    var $myDiv = $("nav > ul > li");
    var $myDropDown = $myDiv.find("div");

    $myDiv.on("mouseover", function() {
           $(this).find("div").animate(
               {display: block}, 2000
           );

    }).on("mouseleave", function(){
     $(this).find("div").animate(
               {display: none}, 2000
           );
    });
});




