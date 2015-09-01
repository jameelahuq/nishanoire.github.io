/**
 * Created by HUQ on 8/31/15.
 */

$(function () {
  init();

});

function init () {

  $dragging();
  $dropping();

  $('.restart').on("click", function() {
    location.reload();
  });


}



function $dropping () {
  var $drop = $('.droppable');
  var totalAnimals = 3;

  $drop.droppable({

    accept: $('.draggable'),

    drop: function(event, ui) {
      var $this = $(this);
      var thisAnimal = ui.draggable;
      var boatImGoingOn = $this.find('.imOnABoat');
      var animalsOnBoat = boatImGoingOn.children();

      if (animalsOnBoat.length == 0 || animalsOnBoat.data("weight") >= thisAnimal.data("weight")) {
        thisAnimal.prependTo(boatImGoingOn);
        console.log("We are going to boat " + $this.data("id"));
        $dropping("valid");
      } else {
        $('.results').text("That " + thisAnimal.text() + " is going to crush the others!");
      }
      if ($('.lastBoat').children().length === totalAnimals) {
       youWin();
      }
    }
  });
}


function youWin() {
  $('.results').text('You saved the animals!');
}

function $dragging () {
  var $drag = $(".draggable");
  $drag.draggable({
    start: function () {
      var $this = $(this);
      console.log("I'm a " + $this.text());
      return ($this.text() == $this.parent().children().first().text());
      },
    helper: "clone",
    revert: "invalid",
    stack: $drag
    });
  }



//}




//var SELECT_DRAGGABLE = ".draggable";
//var SELECT_CONTENT = ".content";
//var ATTR_WIDTH = "width";
//var ID_LAST_TOWER = "tower3";
//var NUMBER_OF_DISCS = "3";
//
//var myMessages = ['info','success'];
//
//$(function() {
//  initialize();
//});
//
//function initialize() {
//  $("#effect").hide();
//  hideAllMessages();
//  initDrag();
//  initDrop();
//}
//
//function initDrag() {
//  $(SELECT_DRAGGABLE).draggable({
//    revert: "invalid",
//    stack: $(SELECT_DRAGGABLE),
//    helper: "clone",
//    cursor: "move",
//    addClasses: "false",
//    start: function(event, ui) {
//      return isDraggingAllowed($(event.target).parent(), event.target);
//    }
//  });
//}
//
//function initDrop() {
//  $(".droppable").droppable({
//    accept: SELECT_DRAGGABLE,
//    drop: function(event, ui) {
//      var targetTower = $(this).find(SELECT_CONTENT);
//      if (isValidMove(targetTower, ui.draggable)) {
//        $(ui.draggable).prependTo(targetTower);
//      } else {
//        showMessage(myMessages[0]);
//      }
//
//      if (isDone(event.target)) {
//        showMessage(myMessages[1]);
//      }
//    }
//  });
//}
//
//function isDraggingAllowed(parent, child) {
//  return $(parent).children()[0].id == child.id;
//}
//
//function isValidMove(parent, child) {
//  var children = $(parent).children();
//  return (children.length == 0) || (children.css(ATTR_WIDTH) >= child.css(ATTR_WIDTH));
//}
//
//function isDone(parent) {
//  return ((parent.id == ID_LAST_TOWER) && ($(parent).find(SELECT_CONTENT).children().length == NUMBER_OF_DISCS));
//}
//
//function hideAllMessages() {
//  for (i = 0; i < myMessages.length; i++) {
//    $('.' + myMessages[i]).hide();
//  }
//}
//
//function showMessage(type) {
//  var msgElement = $('.' + type);
//  msgElement.show();
//  msgElement.animate({top:"0"}, 2000);
//  msgElement.fadeOut("slow", function () {
//    $("." + type).hide();
//  });



