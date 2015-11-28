/*each chunck of code is a different modlue. I am currently putting each module in a separate file*/
(function() { /*Anonymous name space: prevents coding error of creating a global variable */
	$(function () {
		$("merryGoRound").on("click","button", function() {
			var counter = 0;
			do {
				var spinAgain = confirm("Want to go again?");
				counter ++;
			} while (spinAgain);
			$("merryGoRound .results").text("You spun " + counter + " times!");
		});
	});
})();

//var myDataRef = new Firebase('https://c10y82los9x.firebaseio-demo.com/');
//myDataRef.set('User ' + name + ' says ' + text);