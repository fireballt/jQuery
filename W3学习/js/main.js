$(document).ready(function(){

	var $nav = $("#nav");
	var $menu = $("#menu");
	$nav.hide();
	$nav.animate({right:'-210px'});

	$menu.click(function(){
		// alert("aa");
	$nav.show();
	$nav.animate({right:'0px'});
	$(this).hide();	
	});
	$("#nav a").click(function(){
		$nav.animate({right:'-210px'});
		$menu.fadeIn();
	})
	// $("menu").an

});