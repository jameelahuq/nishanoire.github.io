/**
 * Created by HUQ on 8/31/15.
 */
$(function () {

  var $insert = $('.insert');
  var $add = $('.add');
  var $list = $('.list');
  var $listItem = $('.listItem');
  $add.on("click", function(e) {
    e.preventDefault();
    var itemJustCloned = $listItem.clone().prependTo($list);
    itemJustCloned.removeClass("template").find($('.item')).text($insert.val());
    $insert.val("");
  });

  $list.on("change", ('.check'), (function() {
    //e.preventDefault();
    $(this).siblings().toggleClass('done');
  }));



  //
  //function crossItOff(e) {
  //  e.toggleClass('.done', addOrRemove)
  //}

});

//
//<input class="check" type="checkbox">
//    <span class="item"></span>
//
//    $('.list').clone().attr('id', newId).appendTo('p'); // append to where you want
