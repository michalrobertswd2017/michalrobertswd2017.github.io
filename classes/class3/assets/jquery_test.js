$(function(){

    var captionhidden = true;

//    $("img").on("click", function(){
//
//        if (captionhidden){
//            $(this).next().show();
//            captionhidden = false;
//
//        }else{
//            $(this).next().hide();
//            captionhidden = true;
//        }
//
//
//    });

    var myImg = $("img");
    var myCaption = myImg.next();

    myImg.on("mouseenter", function(){
        myCaption.slideDown();
    }).on("mouseleave", function(){
        myCaption.slideUp();
    })

    ;
});
