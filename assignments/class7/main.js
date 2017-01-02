

$(function(){

    var saturationSlider = $("#saturation");
    var lightnessSlider = $("#lightness");
    var myCircle = $("#circle");


    $("#saturation, #lightness").on("change mousemove", function(){
        myCircle.css("background","hsl(0,"+saturationSlider.val()+"%,"+lightnessSlider.val()+"%)");
        myCircle.attr("data-color","hsl(0,"+saturationSlider.val()+"%,"+lightnessSlider.val()+"%)");
    });

});
