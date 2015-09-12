/**
 * Created by HUQ on 9/11/15.
 */
$(function () {
  //when it scales larger, then we can still find
  //each piece based on their presence in the gameboard
  var $gameboard = $('#gameboard');

  var players = ["human", "cat"];
  var currentPlayer = 0;

  var numberToWin = 3;

  $gameboard.on('click', '.row div', function() {
    $(this).addClass('selected');
    $(this).addClass(players[currentPlayer]) ;
    currentPlayer === 0 ? currentPlayer ++ : currentPlayer --;
    checkForWin($(this));
  });


  function checkForWin(clickedBox) {
    //three in a row win
    var winningRow = clickedBox.closest('.row');
    // TODO: why isn't this looking for anything? ('.' + players[currentPlayer]);
    if (winningRow.find('.human').length === numberToWin ||
        winningRow.find('.cat').length === numberToWin)
    {
      alert('You Won by ROW!!');
    }
    //three in a col win
    var winningCol = "[data-col*=" + clickedBox.data("col") + "]";
    if ($gameboard.find(".human" + winningCol).length === numberToWin||
        $gameboard.find(".cat" + winningCol).length === numberToWin) {
      alert('You win Col!!!!');
    }
    //diagonal win




}
  //||
  //  $gameboard.find('.cat').length === 3)
  //}


});


