(function () {
$(function() {
  var $module = $('#catBush');
  var $field = $module.find('.field');
  var size = 5;
  var catRow = Math.floor(Math.random()*(size));
  var catCol =  Math.floor(Math.random()*(size));
  var $row = $('<div class="row"></div>');

  //$field.append('<div>' + catRow + ", " + catCol);
  for (i=0; i < size; i++){
  	var isRow = false;
  	if (i == catRow) {
  		isRow = true;
  	}
  	$field.append($row.clone().addClass('row-' + i));
  	for (j=0; j<size; j++) {
  		if (isRow === true && catCol == j) {
  			$('.field .col-' + i).append('^^');
  		} else {
  		$('.field .col-' + i).append('ww');
  		}
  	}
  }

  $field.find('div').click(function() {
    $(this).alert("this is a field!");
  });

}); 
})();