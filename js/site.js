$(function() {

// hide/show content
$(".nav").click(function(event) {
	event.preventDefault();
	$("div").toggleClass("hide");
	$("body").toggleClass("backgroundcolor");
});

//scroll function
$(window).scroll(function() {
	$("body").toggleClass("backgroundcolor2");
});

//mouse move function
$("nav").mousemove(function() {
	$(".bam").addClass("bam2");
});

$(window).mousedown(function() {
	$(".bam").removeClass("bam2");
});

$(window).mouseup(function() {
	$(".bam").addClass("bam2");
});


//countdown button
$(".button1").on("click", function(event) {
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
$(".toggle").click(function() {
	$("p").toggle("slow");
});

// Remove opacity to picture of NYC
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

//slide away function
$(".slide").click(function() {
	$(this).slideUp();
})

//change background color when scrolling
$(".crazybox").hover(function(event) {
	event.preventDefault();
	var $thisBox = $(this);
	$thisBox.toggleClass("magnify");

});

//hover to make text vanish
$(".hover1").hover(function(event) {
	event.preventDefault();
	$("h5").fadeOut( 100 );
	
})

//multiply words
$(".multiply").click(function() {
	$(".multiply").append("<div>MORE!</div>");
});

//shuffle box
$(".right").click(function() {
  $(".block").animate({ "left": "+=50px" }, "slow" );
});
 
$(".left").click(function(){
  $(".block").animate({ "left": "-=50px" }, "slow" );
});










});