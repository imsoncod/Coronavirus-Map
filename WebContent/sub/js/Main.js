window.onload = function () {
	
	var target = $('.target');
	var zoom = target.data('zoom');
	
	$(".wrap")
		.on('mousemove', magnify)
		.prepend("<div class='magnifier'></div>")
		.children('.magnifier').css({
			"background": "url('" + target.attr("src") + "') no-repeat",
			"background-size": target.width() * zoom + "px " + target.height() * zoom+ "px"
		});
	
	var magnifier = $('.magnifier');
	
	function magnify(e) {
		var mouseX = e.pageX - $(this).offset().left;
		var mouseY = e.pageY - $(this).offset().top;

		if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
			magnifier.fadeIn(100);
		} else {
			magnifier.fadeOut(100);
		}

		if (magnifier.is(":visible")) {
			var rx = -(mouseX * zoom - magnifier.width() /2 );
			var ry = -(mouseY * zoom - magnifier.height() /2 );
			var px = mouseX - magnifier.width() / 2;
			var py = mouseY - magnifier.height() / 2;
			magnifier.css({
				left: px,
				top: py,
				backgroundPosition: rx + "px " + ry + "px"
			});
		}
	}

};