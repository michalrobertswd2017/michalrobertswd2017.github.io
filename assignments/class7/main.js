
   $(function(){

    var mySlider1 =$("#lightness");
    var myCircle =$("#circle");
    var mySlider2 =$("#saturation");


    $("#saturation,#lightness").on("change mousemove",function(){
        myCircle.css("background,"hsl(0,"+mySlider1.val()+"%,"+mySlider2.val()+"%");
        myCircle.data("color","hsl(0,"+mySlider1.val()+"%,"+mySlider2.val()+"%");
    });

});


