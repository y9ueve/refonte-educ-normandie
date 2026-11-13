$(document).ready(function() {
	$("#owl-demo").owlCarousel({
		autoPlay : 10000,
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true
	});
});

jQuery(document).ready(function($){
	$('#menu-mobile').prepend('<div id="menu-icon"></div>');

	$("#menu-icon").on("click", function(){
		$(".menu-smartphone").slideToggle();
		$(this).toggleClass("active");
	});
});

window.onload = function(){
	if(navigator.userAgent.indexOf('Mobile') !== -1 && navigator.userAgent.indexOf('AppleWebKit') !== -1){
		var liEl = document.getElementsByTagName('li');
		for(var i = 0; i < liEl.length; i++){
			var aEl = liEl[i].getElementsByTagName('a');
			for(var j = 0; j < aEl.length; j++){
				aEl[j].addEventListener('mouseover', function(){
					window.location.href = this.getAttribute('href');
				});
				
			}
		}
	}
};