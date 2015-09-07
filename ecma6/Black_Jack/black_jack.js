/**
 * Created by HUQ on 9/1/15.
 */
'use strict';

var suits = ['c' , 'h', 'd', 's'];
var ranks = ['A', '2', '3' , '4', '5' , '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

suits.forEach(function(suit){
  ranks.forEach(function(rank){
    //var card = {};
    //card.rank = rank;
    //card.suit = suit;
    //card.value
    cards.push(rank + suit);
  });
});

