<? $page_title = "Homepage";
 include("header.php"); ?>

<div class="container-fluid text-center">
  <div class="row content">
    <div class="col-sm-2 sidenav">
      <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p>
    </div>
      <a href="second.php">hello you- come to my second page!</a>
    <div class="col-sm-8 text-left">
      <h1>Welcome</h1>
      <h2>Project 1- Play Therapy</h2>
      <hr>
      <h3>Test</h3>
      <p>Lorem ipsum...</p>
    </div>

  </div>
</div>

            <a href="#" data-featherlight="#mylightbox">Click here......</a>
        <div class="thislighbox" id="mylightbox">I have made this lightbox on my sites</div>


            <div class="myslider">
          <div><img src="../final/website1.jpeg"></div>
          <div><img src="../final/website2.jpeg"></div>
          <div><img src="../final/website3.jpeg"></div>
        </div>

    <script src="//code.jquery.com/jquery-latest.js"></script>
        <script src="//cdn.rawgit.com/noelboss/featherlight/1.7.0/release/featherlight.min.js" type="text/javascript" charset="utf-8"></script>



        <script src="....">
        </script>
        <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
        <script src="rellax.min.js"></script>
        <script>
            $(document).ready(function(){
          $('.myslider').slick(
          {
              autoplay:true,
              autoplaySpeed:1000
          });

             var rellax = new Rellax('.rellax');

            });

            $('.my2ndSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
});
        </script>

<? include("footer.html"); ?>




