$(function(){

    var invisible = true;
    var myRight = "28px";

    $(".hamburger").on("click", function(){
        $("aside").animate(
            {right: myRight},
            {queue: false, duration: 500, easing: "linear"}

        );
         if (invisible){
            myRight = "-100px";
            invisible = false;
        }else{
            myRight = "28px";
            invisible = true;
        }
    });

    });
});
