// put your JavaScript here, rather than inline in index.html
 
 
// Shorthand for $( document ).ready()
$(function() {
    console.log( "this is JQuery document ready!" );


//document.write("<br/>Hi, I am put here from app2.js inside the document ready function");	

	$("body").append("<br/>Hi, I am put here from app2.js inside the document ready function");
	
	
	$("body").append("<br/>also using JQuery hover on div's with class outer");

    $("#div01").html ("I am replacement text for the original contents of div01 by id using JQuery during page load");
	
	$( "#updateDiv01JQ" ).click(function() {
		$("#div01").html ("I was put here by clicking the button Div 01 using JQuery");
		$("#div01").css("color" , "blue");
		$("#div01").css("backgroundColor", "yellow");
	});	
	
	$( "#updateDiv02JQ" ).click(function() {
		$("#div02").html ( "I was put here by clicking the button Div 02 using JQuery");
		$("#div02").css("color" , "red");
		$("#div02").css("backgroundColor", "green");
	});	 
	
	
	$( "div.outer" ).hover(
	  function() {
		$( this ).addClass( "hover" );
	  }, function() {
		$( this ).removeClass( "hover" );
	  }
	);	
	
	alert("Page Reloaded");
}); // document ready