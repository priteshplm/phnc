
var ToastPosition =  '<div class="toast-msg-position "></div>',
	ToastID = 0,
	bgColor = 0;

function CallToast(event,message) {

	


	if ( event == 'success' ) {
		bgColor = 'forest-green-bg'
	}
	else if ( event == 'warning' ) {
		bgColor = 'bid-in-progress'
	}
	else if ( event == 'unsuccess' ) {
		bgColor = 'bid-rejected'
	}

	ToastID = ToastID+1
	
	var ToastHTML = '<div class="toast-msg toast '+bgColor+' " id="'+ToastID+'"  role="alert" aria-live="assertive" aria-atomic="true" data-delay="3500">'+
      '<div class="toast-body container-fluid light-color d-flex py-2">'+
        
         ' <p class="mb-0 text-center w-100 px-3">'+message+'</p>'+

        '<button type="button" class="ml-2 mb-0 close ml-auto" data-dismiss="toast" aria-label="Close">'+
          '<h6 aria-hidden="true" class="mb-0"><i class="icon-icon-close light-color"></i></h6>'+
        '</button>'+
      '</div>'+
    '</div>';

    if ( $('body').hasClass('toast-added') ) {

		$('.toast-msg-position ').append(ToastHTML);
	}
	else{
		$('body').append(ToastPosition);
		$('body').addClass('toast-added');

		$('.toast-msg-position ').append(ToastHTML);

	}

	$('#'+ToastID).toast('show');




}




