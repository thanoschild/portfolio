$( document ).ready(function() {
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 0, 'linear');
});

$(".mobile-menu").click(function () {
	var data = $(".menu ul").attr("data-visible");
	if (data == "false") {
		$(".menu ul").attr("data-visible", true);
		$(".mobile-menu").attr("area-expanded", true);
	} else {
		$(".menu ul").attr("data-visible", false);
		$(".mobile-menu").attr("area-expanded", false);
	}
});
});