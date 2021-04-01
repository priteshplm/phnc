
// close-header-search start
if ($('.close-search-form-box')[0]) {
	
}
// close-header-search end

// back to history page 
function GoBack() {
history.go(-1);
}

// back to history page 



if ($('.btn')[0]) {
	$('.btn').on('mouseenter', function(e) {
// alert();
var parentOffset = $(this).offset(),
relX = e.pageX - parentOffset.left,
relY = e.pageY - parentOffset.top;
$(this).find('.btn-animation').css({top:relY, left:relX})
})
	.on('mouseout', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('.btn-animation').css({top:relY, left:relX})
	});
}