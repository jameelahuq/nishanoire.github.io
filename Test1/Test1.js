/**
 * Created by HUQ on 8/31/15.
 */
$(function () {
  var $point1 = $('.point1');
  var $point2 = $('.point2');
  var $calculate = $('.calculate');
  var $result = $('.result');

  $calculate.on("click", function() {
    var point1Array = $point1.val().match(/(\d+)/g);
    var point2Array = $point2.val().match(/(\d+)/g);
    var x2 = Math.pow((point1Array[0] - point2Array[0]), 2);
    var y2 = Math.pow((point1Array[1] - point2Array[1]), 2);
    var dist = Math.sqrt(x2+y2);


    console.log(dist);
    console.log(Math.sqrt(52));
    $result.text("Result: " + dist);
  });

});
