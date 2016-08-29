var elText = document.getElementsByClassName('text')[0],	
    elPause = document.getElementsByClassName('pause')[0],	
	elwrapper = document.getElementsByClassName('content-wrapper')[0],
	play = false,
	pause = false;

elText.addEventListener( "click", function() {
	if(!play){
		elwrapper.classList.add("animate");
		play = true;
	}
	else{
		elwrapper.classList.remove("animate");
		// elwrapper.classList.add("animate");
		play = false;
	}
});
elPause.addEventListener( "click", function() {
	if(!pause){
		elwrapper.classList.add("animate-pause");
		pause = true;
		elPause.innerHTML = "Play";
	}
	else{
		elwrapper.classList.remove("animate-pause");
		pause = false;
		elPause.innerHTML = "Pause";
	}
});
