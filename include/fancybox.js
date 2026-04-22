$(document).ready(function() {
	
	$(".fancybox").fancybox({
		openEffect : 'fade',
		closeEffect : 'fade',
		closeBtn : 'true',
	});
			
});

$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});