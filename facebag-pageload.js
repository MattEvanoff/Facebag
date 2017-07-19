(function() {

	setInterval(function() {
		document.querySelectorAll('div[id^=addComment], a.UFILikeLink, #pagelet_composer').forEach(function(input){
				input.remove();
			});
	}, 100);

})();