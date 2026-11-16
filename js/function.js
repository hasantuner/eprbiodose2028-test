// JavaScript Document

//common
$(function(){
	$("#header").load("./common/header.html");
	$("#footer").load("./common/footer.html");
	$("#navigation").load("./common/navigation.html");
});

// marker
$(function() {
	var $marker = $('.marker');
	var $win = $(window);
	$win.on('load scroll', function() {
		var height = window.innerHeight;
		var scroll = $win.scrollTop();
		$marker.each(function() {
			if (scroll > $(this).offset().top - height +100) {
				$(this).addClass('active');
			}
		});
	});
});

// history
$(function() {
    $('.history-toggle').on('click', function() {
        var $button = $(this);
        var panelId = $button.attr('aria-controls');
        var $panel = $('#' + panelId);
        var isExpanded = $button.attr('aria-expanded') === 'true';

        // Close all other conference panels
        $('.history-toggle').not($button).attr('aria-expanded', 'false');
        $('.history-toggle').not($button).find('.toggle-icon').text('+');
        $('.history-panel').not($panel).prop('hidden', true);

        // Toggle the selected conference panel
        $button.attr('aria-expanded', String(!isExpanded));
        $panel.prop('hidden', isExpanded);
        $button.find('.toggle-icon').text(isExpanded ? '+' : '−');
    });
});
