
if ($('.chat-area')[0]) {


$('.inbox-nav-link').click(function(){
	var $this = $(this)
	$('.inbox-nav-link').removeClass('active');
	$('.chat-area').addClass('user-selected');
	$('body').addClass('user-selected');

    $('html, body').animate({ scrollTop: 270 }, 100);

	setTimeout(function(){
	$this.addClass('active');
	}, 300);
});

$('.inbox-close').click(function(){
	var $this = $(this)

	$('.inbox-nav-link').addClass('active');
	$('.chat-area').removeClass('user-selected');
	$('body').removeClass('user-selected');

	$this.removeClass('active');
});






}



$(window).scroll(function() {
    if ($(this).scrollTop() > 250){  
        $('.other-profile-status').addClass("sticky");
    }
    else{
        $('.other-profile-status').removeClass("sticky");
    }
});