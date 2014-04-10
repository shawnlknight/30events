$(function() {

//countdown button
$(".button").on("click", function(event) {
	event.preventDefault();
	var button = $(this);
	// get the value from the number span, and subtract 
	var numberElem = button.find(".number");
	var number = Number(numberElem.text()) - 1;
	// update the number span
	numberElem.text(number);
	// if the number is 0
	if (number === 0) {
		// 	disable button
		button.prop("disabled", true);
		//  unbind event handler
		button.off("click");
	}
});

//toggle button
$(".toggle").click(function(event) {
	$("p").toggle("slow");
});

// Add opacity to picture of NYC
$(".nyc").click(function(event) {
	event.preventDefault();

	console.log($(this));

	$("img").toggleClass("opacity");
});

//Change box color
$(".colorbox").click(function(event) {
	event.preventDefault();
	$(".colorbox").toggleClass("colorboxchange");
});

//change background color when scrolling
$(".crazybox").hover(function(event) {
	event.preventDefault();
	var $thisBox = $(this);
	$thisBox.toggleClass("magnify");

});

//hover to make text vanish
$(".hover").hover(function(event) {
	event.preventDefault();
	$("h1").fadeOut( 100 );
	
})




});