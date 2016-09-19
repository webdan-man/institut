function init_buttons(selector){
	$(selector).each(function(){
		var text = $(this).text()
		$(this).html('');
		$('<span class="original">'+text+'</span><span class="clone">'+text+'</span>').appendTo(this);
	});
}

$(document).ready(function() {
init_buttons('.btn,.a-btn');
});
