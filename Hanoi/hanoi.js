/**
 * Created by HUQ on 8/31/15.
 */
$(function () {
  init();
});

function init () {
  restart();
  $dragging();
  $dropping();
}

function restart() {
    $('.restart').on("click", function () {location.reload(); });
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
        $dropping("valid");
      } else {
        $('.results').text("That " + thisAnimal.text() + " is going to crush the others!");
      }

      if ($('.lastBoat').children().length === totalAnimals) { youWin(); }
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
      return ($this.text() == $this.parent().children().first().text());
    },
    helper: "clone",
    revert: "invalid",
    stack: $drag
  });
}