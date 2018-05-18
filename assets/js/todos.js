//Check Off Specific Todos By Clicking
	//The additional 'li' argument means "listen for clicks on lis in this ul"
		//This way, the code will run on future lis that are added through the text input
		
$('ul').on('click', 'li', function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$('ul').on('click', 'span', function(event){
	//.parent() fades out the li. Otherwise only the span is removed with the this keyword
	$(this).parent().fadeOut(500, function(){
		//this 'this' keyword refers now to the li because of the above .parent()
		$(this).remove();
	});
	//Stop event 'bubbling'. This method stops the li event from triggering
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$('ul').append('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + todoText + '</li>');
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});