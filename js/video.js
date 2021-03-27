var video = document.querySelector('#player1');
var volume = document.querySelector('#volume');

window.addEventListener("load", function() {
	console.log("Good job opening the window")


});

document.querySelector("#play").addEventListener("click", function() {
	volume.innerHTML = video.volume * 100 + '%';
	video.play();
	console.log("Play Video");
	

});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

//slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log('New speed is',video.playbackRate);
});

//speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log('New speed is',video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log('Original location',video.currentTime);
	video.currentTime += 15;
	if (video.currentTime===video.duration){
		video.currentTime = 0
		console.log('Going back to beginning')
	}
	console.log('New location',video.currentTime);

	video.play();
});


// mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector("#mute").textContent = 'Unmute'
	} else {
		video.muted = false;
		document.querySelector("#mute").textContent = 'Mute'
	}
});



// slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log('changing volume');
	console.log(this.value);
	video.volume = this.value/100;
	volume.innerHTML = video.volume * 100 + '%';
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
	console.log("changing CSS");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log("Remove CSS");
});

