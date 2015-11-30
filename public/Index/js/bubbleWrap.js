(function () {
	$(function () {
		var $module = $('#bubbleWrap');
		var numBubbles = 0;

		$module.find('form').submit(function() {
			$module.find('.makeBubbles div').remove();
			numBubbles = Number($('input[name=numBubbles]').val());
			
			if (numBubbles < 500) {
				for (i=0; i<numBubbles; i++) {
					$('.makeBubbles').append('<div></div>');
				}
				
				$module.find('.makeBubbles div').click(function() {
					$(this).fadeTo('fast', 0);
				});
				
				$module.find('.makeBubbles div').mouseover(function() {
					$(this).fadeTo('fast', 1);
				});
			} else {
				confirm("Ek! Try a number between 0 and 500...");
			}
			return false;
		});

	});
})();


//.on("focus", "button", function() {