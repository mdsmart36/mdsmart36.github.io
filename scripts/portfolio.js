$(document).ready(function() {
	
	$("#form-button").on("click", function(e) {
		e.preventDefault();
		
		var firstName = $("#first-name").val(),
				lastname = $("#last-name").val(),
				emailAddress = $("#email-address").val(),
				phoneNumber = $("#phone-number").val();

		$("#form-output").text(firstName + lastname);
	});
});


/* -- unused code for hiding and showing tabs
$('.tab-list').each(function() {
	var $this =	$(this);
	var $tab = $this.find('li.active');
	var $link = $tab.find('a');
	var $panel = $($link.attr('href'));

	$this.on('click', '.tab-control', function(e) {
		e.preventDefault();
		var $link = $(this);
		var id = this.hash;

		if (id && !$link.is('.active')) {
			$panel.removeClass('active');
			$tab.removeClass('active');

			$panel = $(id).addClass('active');
			$tab = $link.parent().addClass('active');
		}
	});
});
*/