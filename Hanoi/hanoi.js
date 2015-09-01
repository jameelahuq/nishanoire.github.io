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



