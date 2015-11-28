/**
 * Created by HUQ on 8/27/15.
 */

(function () {
  $(function() {
    var catIsIn = Math.floor(Math.random()*7)+ 1;
    console.log(catIsIn);

    var $InstructionField = $('.tries');
    var isCatFound = "notFound";
    var notCatImg = 'cat-pumpkin.png',
        catImg = 'pumpkin-cat.png';

    var catStateStatements = {
      notFound : "Click on a fence to look behind it.",
      found: "You found her! Click here to try again."
    };


    $InstructionField.text(catStateStatements[isCatFound]);

    $('.field').find('.fence').on('click', function () {
      if (isCatFound === "notFound") {
        var $thisFence = $(this);
        ($thisFence.data('id') == catIsIn) ?
            catHasBeenFound($thisFence) :
            keepPlaying($thisFence);
      }
    });

    function keepPlaying ($thisFence) {
      fadeIntoNextImage($thisFence.find('img'), notCatImg)
    }

    function catHasBeenFound ($thisFence) {
      isCatFound = "found";
      var $imgOfThisFence = $thisFence.find('img');
      fadeIntoNextImage($thisFence.find('img'), catImg);

      $InstructionField.text(catStateStatements[isCatFound])
          .on('click', function () {
            location.reload(true);
      });

      function flashDialogue() {
        $InstructionField.fadeOut(300).fadeIn(300);
       // $InstructionField.addClass('winnersBlue');
      }


      setInterval(flashDialogue, 300);
    }

  //  var intId = setInterval(animateImage,1000);
  //  var intId=   setInterval(animateupImage,1000);
  //
  //function animateImage() {
  //  $('#bee').animate({bottom: '-50%'}, 3000, 'linear', 1000);
  //}
  //function animateupImage() {
  //  $('#bee').animate({bottom: '0%'}, 3000, 'linear',1000 );
  //}
    function fadeIntoNextImage ($thisImg, srcOfNextImg) {
      $thisImg.fadeOut(100, function() {
        $thisImg.load(function() { $thisImg.fadeIn(100); });
        $thisImg.attr("src", srcOfNextImg);
      });
    }




  });
})();
