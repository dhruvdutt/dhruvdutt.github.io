/* Skill Bar */
function setBarWidth(dataElement, barElement, cssProperty, barPercent) {
  var listData = [];
  $(dataElement).each(function() {
    listData.push($(this).html());
  });
  var listMax = Math.max.apply(Math, listData);
  $(barElement).each(function(index) {
    $(this).css(cssProperty, (listData[index] / listMax) * barPercent + "%");
  });
}
setBarWidth(".style-1 span", ".style-1 em", "width", 142);
/*Zoom prevent*/
$(document).keydown(function(event) {
				if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        				event.preventDefault();
				}
			});

			$(window).bind('mousewheel DOMMouseScroll', function (event) {
       				if (event.ctrlKey == true) {
       						event.preventDefault();
       				}
			});