/**
 * Created by HUQ on 8/28/15.
 */

$(function() {
  var stringWeWillPush = ''; //must be a better way to do this
  var $numDisplay = $('.numDisplay');
  var arrayNumOpNum = [];
  var $clear = $('.allClear');

  var x = parseInt("-2147483648");
  console.log(x);

  function putNumberIntoArrayNumOpNum ($button, length) {
    if ($button.val() === '+/-') {
      if (stringWeWillPush[0] !== '-') {
        stringWeWillPush = ('-').concat(stringWeWillPush);
      } else {
        stringWeWillPush = stringWeWillPush.replace('-', '');
        console.log(stringWeWillPush);

      }
    } else {
      stringWeWillPush += $button.val();
    }

    $numDisplay.val(stringWeWillPush);
    var index = length === 0 || length === 1 ? 0 : 2;
    arrayNumOpNum[index] = stringWeWillPush;
    console.log(arrayNumOpNum);
  }


  $('.percent').on("click", function(){
    var numToPercent = arrayNumOpNum.length === 3 ? evaluateBinaryOperation(arrayNumOpNum) : arrayNumOpNum[0];
      numToPercent = numToPercent / 100;
      arrayNumOpNum = [numToPercent];
      $numDisplay.val(numToPercent);
    });

      //can I make this into a completely illegible but totally stellar
      //recursive array?


  $('.num').on("click", function() {
    var $this = $(this);

    if ($numDisplay.val().indexOf('.') !== -1 && $this.val() === '.') {
      return;
    }

    putNumberIntoArrayNumOpNum ($this, arrayNumOpNum.length);
    allClearToClear();
  });

  $('.operator').on("click", function() {

    var $this = $(this);
    chosenOp = $this.val();

    if (arrayNumOpNum.length === 2) {

      arrayNumOpNum[1] = chosenOp;

    } else if (arrayNumOpNum.length === 1) {

      arrayNumOpNum.push(chosenOp);


    } else if (arrayNumOpNum.length === 3) {
      var justCalculated = evaluateBinaryOperation(arrayNumOpNum).toString();
      $numDisplay.val(justCalculated);
      arrayNumOpNum = [justCalculated, chosenOp];
      console.log(arrayNumOpNum);
    }

    stringWeWillPush = '';

  });


    function displayResult(result) {
      $numDisplay.val(result);
      arrayNumOpNum = [result, arrayNumOpNum[1]];
      console.log(arrayNumOpNum);
    }


  $('.equals').on("click", function() {

    if (arrayNumOpNum.length === 2)
      arrayNumOpNum[2] = arrayNumOpNum[0];

    displayResult(evaluateBinaryOperation(arrayNumOpNum));

  });

  $('.clear').on("click", function() {
    arrayNumOpNum.pop();
    $(this).addClass('allClear').removeClass('clear');
    $(this).val('AC');
    console.log(arrayNumOpNum);
  });


  $clear.on("click", function () {
    $clear.val() === 'C' ? doClear() : doAllClear();
  });

  function doAllClear() {
    arrayNumOpNum = [];
    $numDisplay.val(0);
    stringWeWillPush = '';
  }

  function doClear() {
    arrayNumOpNum.pop();
    var onlyNumberLeft = arrayNumOpNum[0];
    $numDisplay.val(onlyNumberLeft);
    if (arrayNumOpNum.length === 1)
      stringWeWillPush = onlyNumberLeft;
    else (arrayNumOpNum.length === 2)
      stringWeWillPush = '';
      $clear.val('AC');
    console.log(arrayNumOpNum);


  }

  function allClearToClear () {
    $clear.val('C');
  }

  function evaluateBinaryOperation(arrayNumOpNum) {
    //while (string.length > 1) { //TODO: account for order of operation

    var num1 = parseFloat(arrayNumOpNum[0]);
    var num2 = parseFloat(arrayNumOpNum[2]);
    var op = arrayNumOpNum[1];
    var tots;

    switch (op) {
      case '*': tots = num1 * num2;
        break;

      case '/': tots = num1 / num2;
        break;

      case '+': tots = num1 + num2;
        break;

      case '-': tots = num1 - num2;
        break;

      case '^': tots = Math.pow(num1, num2);
        break;
    }
    return tots;
  }

});