$(document).ready(function() {
	
	// animate the html body for scrolling effect	
	$(document).on("click", ".scrollable", function(e) {
		e.preventDefault();
		var target = this.getAttribute('data-target');
		$("html, body").animate({
			scrollTop: $(target).offset().top 
		}, 750); 
	});

	// NEED TO COMPLETE - send contact form information
	$("#form-button").on("click", function(e) {
		e.preventDefault();
		
		var firstName = $("#first-name").val(),
				lastname = $("#last-name").val(),
				emailAddress = $("#email-address").val()

		$.post("https://www.google.com/recaptcha/api/siteverify", {
			secret: '6LepswQTAAAAAOghGyM54KNR_PHM22Ghp70zX8l1',
			response: grecaptcha.getResponse()
		}, 
			function(data) {
				// show hidden div
				console.log("reCAPTCHA successful");

		});
		
	});
});

