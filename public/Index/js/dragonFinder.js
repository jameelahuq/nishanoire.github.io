(function () {
  $(function () {
    $("#dragonFinder").on("click", "button", startAdventure);

  });

//initializing variables to check and clean user responses
  var reply = function(promptString) {
    var longReply = prompt(promptString);
    return longReply.toUpperCase().substring(0,1);
  };

  var insolventReturn = function() {
    return reply('The Knight scratches her head. There\'s a voice...and it\'s not making any sense. What letter should she choose?');
  };

  var inputCall = function(choiceToFunction, storyPrompt) {
    var userChoice = reply(storyPrompt);
	  var done = false;
  	while (!done) {
  	  for (var letter in choiceToFunction) {
        if (choiceToFunction.hasOwnProperty(letter) && userChoice === letter) {
          choiceToFunction[letter]();
          console.log(userChoice);
          done = true; 
        } 
      } 
      if (!done) {
      userChoice = insolventReturn();
      }
    }
  };
  
  var shopTime = 2;
  var itemsHeld = '';
  
  function itemDesc (itemCode, itemTime, itemString) {
    this.itemCode = itemCode;
    this.itemTime = itemTime;
    this.itemString = itemString;
  }

  var chosenItem = function(itemDesc) {
    itemsHeld += itemDesc.itemCode;
    shopTime -= itemDesc.itemTime;
    confirm(itemDesc.itemString);
    if (shopTime > 0) {
       inputCall ( 
      {
        S: shopS,
        A: shopA,
        L: shopL
      },
      '\'The sun is still rising\', the knight thinks to herself. \'Maybe I have time for another shop?\''
        ); 
    } else if (shopTime <= 0) {
        onwardDragons();
    }
    console.log('Items held are ' + itemsHeld);
    console.log('Time left to shop is ' + shopTime);
  };



//story dialgoue with user imputs to progress the story
var startAdventure = function() {
    var letsBegin = confirm('At that moment, the great knight felt as though she had a guardian...someone guiding her through the perilous journey. The queen asked again.."Brave Knight, will you journey to beseech the dragon?"');
    if (letsBegin) {
      goToShop();
    }
  };


var goToShop = function () {
  inputCall (
    {
  	  S: shopS,
  		A: shopA,
  		L: shopL
  	}, 
    'She bent with reverance. "I will my leige." And with that, her journey began. She had little time, only half rise until noon...should she start at the (S)MITHY, the (A)LCHEMIST, or the (L)IBRARY?'
  ); 
};

//Going to the Smithy
var shopS = function () {
  inputCall (
    {
      W: itemW,
      S: itemS,
      M: itemM
    },
    '"Greetings, Lo! It is the Knight of the Lily, setting out to beseech the dragon! What need brings such Noble blood to our fair shop? (W)EAPONS, (S)HEILDS, or perhaps you need us to reshoe your (M)OUNT?"'
  );
};

var itemW = function () {
  var wDesc = new itemDesc('W', 2,
    'The Lily Knight spends all morning testing swords with the smihty. Each one is more useless than the next, until finally he pulls out a thin, nearly white blade. ' +
    '"Ah! QuickSilver you found! I nearly forgot about her, she\'s been here so long." The blade is light, the balance perfect, and the edge finer than silk. ' +
    'After slicing neatly through the practice dummies, the Lily of the Valley makes her decision. "I\'ll take it."');
  chosenItem(wDesc);
};

var itemS = function () {
  var sDesc = new itemDesc('S', 0.5,
    '"I need a shield, good Smithy," our fair Knight proclaims. "Then I must accomidate," the Smithy replies. ' +
    '"May I have your sigil?" The Lady Lily hands over the pendant dangling beneath her leather shirt, and the Smithy grabs a light buckler. ' +
    '"I\'ll have this ready by mid-high, feel free to shop around town while you wait. Perhaps the (A)LCHEMIST or (L)IBRARY?"');
  chosenItem(sDesc);
};

var itemM = function () {
  var mDesc = new itemDesc('M', 0.5,
    '"Any long journey begins with a single footstep; your mount is the most important part!" the Smithy replies jovially.' +
    ' "I\'ll have this ready by mid-high, feel free to shop around town while you wait." Perhaps the (A)LCHEMIST or (L)IBRARY?"');
  chosenItem(mDesc);
};

//Going to the Alchamist
var shopA = function() {
  inputCall (
  {
    H: itemH,
    I: itemI,
    F: itemF
  },
  'The Knight enters the Alchemist shop. "Oh, a Knight deems us worthy enough to enter our fair shop; maybe I should throw the rose petals?' +
  ' You may be on a quest for the Queen, but all knights are the same. Looking, for herbs of (H)EALING or (I)NJURING, no doubt. After all, what need have you for our (F)INER wares?"'
  );
};

var itemH = function () {
  var hDesc = new itemDesc('H', 1, 
    '"Of course, you do," the shopkeeper says dismissivley. ' +  
    'He rummages through his wares laboriously, as if he\'s daring her to lose interest. ' +
    'He plods to get a stool, places it in front of a perfectly normal sized cabinet and slowly pulls at a bowl in the middle shelf.' + 
    '"Let me see," he says and goes through the herbs inside at an even more languished pace. ' +
    'The Lady of the Lilly finds herself in a trance-like state until she jumps from the shock of hearning noise again. ' + 
    '"Here you are," he says, and places the healing herbs in front of her.' 
    );
  chosenItem(hDesc);
};


var itemI = function () {
  var hDesc = new itemDesc('I', 1, 
    '"It\'s gotten to that, has it?," the shopkeeper says dismissivley. ' + 
    'He rummages through his wares laboriously, as if he\'s daring her to lose interest. ' +
    'He plods to get a key from a wall behind the counter, and shuffles to a locked cabinet on the exact opposite side of the tiny shop. ' + 
    'He gently probes the keyhole several times, before realizing that the key is twice the size of the hole and returns to the key rack just as slowly as he left it. ' +
    'The Lady of the Lilly finds herself in a trance-like state until she jumps from the shock of hearning noise again.  ' +
    '"Don\'t be too lose with their use," he says, and places the herbs of injuring in front of her.'
    ); 
  chosenItem(hDesc);
};

var itemF = function() {
  var fDesc = new itemDesc('F', 0.5, 
    'He scoff incredulously. "These wears aren\'t for muscle-brained oafs! What makes you think you can use them?"' + 
    'Our fair Knight pulls out her sigil, a silver ovoid framed with curled and fine leaves encasing the most perfectly shaped lilly. ' +
    '"Remember my house," she speaks in low tones, and the shopkeeper is finally and noticably cowed.' + 
    '"Of course, my leige." he mumbles and reaches under the counter. He pulls out an oaken box with carefully organized herbs and elixers. "Take that of which you have need."' +
    'His eyes burn with a sentiment that our Lady can discern, but she has gotten what she needs, and that is enough.'
    ); 
  chosenItem(fDesc);
};

//Going to the Library
var shopL = function() {
  inputCall (
  {
    D: itemD,
    T: itemT,
    P: itemP,
    A: itemA
  },
  'The Knight enters the library, rather...clankily. "Greetings, Lo! A noble at the library, and the Knight of the Lily, at that. How exciting!' +
  ' But do take care about the noise of your....walking...Perhaps I can get you whatever you need? So you can...stay still?' +
  ' Books, books, so many books that would be helpful to you! We have books about (D)RAGONS, (T)RAVEL, native (P)LANTS..."'
  );
};

var itemD = function() {
  var dDesc = new itemDesc('D', 0.25, 
    '"Of Course! You\'re beseeching the dragon, why wouldn\'t you want a book on one?"' + 
    ' And in the time it took for our knight to formulate a response, the books were in her hands.'
    ); 
  chosenItem(dDesc);
};

var itemT = function() {
  var tDesc = new itemDesc('T', 0.25, 
    '"Of Course! You\'re travelling quite far, why wouldn\'t you want a book on that?' + 
    ' And in the time it took for our knight to formulate a response, the books were in her hands.'
    ); 
  chosenItem(tDesc);
};

var itemP = function() {
  var pDesc = new itemDesc('P', 0.25, 
    '"How sagacious! Perhaps you should be a sage?" He chortles to himself at his rather tautonic pun. "Knowing your flora always comes in handy on a long journey!"' + 
    ' And in the time it took for our knight to formulate a response, the books were in her hands.'
    ); 
  chosenItem(pDesc);
};

var itemA = function() {
  var aDesc = new itemDesc('DTPL', 0.5, 
    '"I trust your discretion, good bible man. Get me every text you think I\'ll need..."' + 
    ' "...and can carry!" She finished too late; her hands were filled with a tower of texts taller than herself standing.' +
    ' "Thank you good man!" she mummbled from behind the books, and clanking all the way, she moved precautiously towards a table, the pinnacle of her precariously-piled pilar promising particular peril. ' +
    ' Her leather bound arms flashed like a silver snake, and she snatched the suggested texts from their vertical line without even a quiver in the stack. She quickly perused the titles of the rest.' +
    ' "Hmmm....\'The Forgotten Languages: Lessons for the Beginner.\'" She added it to her collection.' 
    ); 
  chosenItem(aDesc);
};



//onwardDragons is a place holder. Search and destroy.
var onwardDragons = function() {
confirm("After a busy morning of gathering supplies, the time was finally upon our Knight. With horse at her side, and pack at her back, our Lady set off to find the Dragon....(TO BE CONTINUED)");
};


})();
