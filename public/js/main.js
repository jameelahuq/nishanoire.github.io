var cookieMonsterWill =  {
  bakeCookie: function (name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 86400 * 1000));
      expires = "; expires=" + date.toGMTString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";
  },

  findCookie:  function (name) {
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i=0; i < cookies.length; i++) {
      var c = cookies[i];
      while (c.charAt(0) == ' ')
        c = c.substring(1, c.length);
      if (c.indexOf(searchName) === 0)
        return c.substring(searchName.length, c.length);
    }
    return null;
  },

  trashCookie: function (name) {
    writeCookie(name, "", -1);
  }
};

$(function() {
  var $module = $('#catHumanLaser');

  $module.find('.results .text').text("Choose your weapon!");

  $module.on("click", ".userChoice button", function() {
    $module.find(".computerChoice button").removeClass("picked");
    var computerChoice = Math.random();
    if (computerChoice >= 0 && computerChoice < 0.33) {
      computerChoice = "cat";
    } else if (computerChoice >= 0.33 && computerChoice < 0.67) {
      computerChoice = "human";
    } else {
      computerChoice = "laser";
    }

    $module.find('.' + computerChoice).addClass("picked");

    var userChoice = $(this).data("choice");

        if (userChoice === computerChoice) {
          if (userChoice === "cat") {
            displayResult("Kitty Party!!!", computerChoice);
          } else {
            displayResult("Stalemate...", computerChoice);
          } 
        } else if (userChoice === "cat") {
          if (computerChoice === "human") {
            displayResult("You Win!", computerChoice);
          } else if (computerChoice === "laser") {
            displayResult("You Lose :(", computerChoice);
          } 
        } else if (userChoice === "human") {
          if (computerChoice === "laser") {
            displayResult("You Win!", computerChoice);
          } else if (computerChoice === "cat") {
            displayResult("You Lose", computerChoice);
          } 
        } else if (userChoice === "laser") {
          if (computerChoice === "cat") {
            displayResult("You Win!", computerChoice);
          } else if (computerChoice === "human") {
            displayResult("You Lose", computerChoice);
          } 
        }

       $module.find(".results img").attr('src', 'images/' + userChoice + '-' + computerChoice + '.jpg');
  });

$("#merryGoRound").on("click", "button", function () {
    var counter = 0;
    do {
      var spinAgain = confirm("Want to go again?");
      counter ++;
    } while (spinAgain);
    $("#merryGoRound .results").text("You spun " + counter + " times!");
  });
});

var displayResult = function (textResult, computerChoice) {
  $("#catHumanLaser .results .text").text("Your opponent chose " + computerChoice + "... " + textResult);
};

 







