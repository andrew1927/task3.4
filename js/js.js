var elText = document.getElementsByClassName('text')[0];
var elwrapper = document.getElementsByClassName('content-wrapper')[0];

elText.addEventListener( "click", function() 
	{elwrapper.classList.add("animate");});

