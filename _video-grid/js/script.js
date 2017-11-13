//Audio / Video DOM references
//https://www.w3schools.com/tags/ref_av_dom.asp

var grid_videos = [];
var numPlaying = 0;

window.onload = function(){
	console.log("loading window");
	full_vid = document.getElementById('full-page');
	options = document.getElementById('options');

	grid_videos = document.getElementsByClassName('grid-vid');

	for(var i = 0; i < grid_videos.length; i++){
		// grid_videos[i].setAttribute("onmouseover", "unmuteVid("+ i + ")");
		// grid_videos[i].setAttribute("onmouseout", "muteVid(" + i + ")");
		grid_videos[i].setAttribute("onclick", "playVid(" + i + ")");
	}
};

function unmuteVid(vidNum){
	// console.log(vidNum);
	grid_videos[vidNum].muted = false;
}

function muteVid(vidNum){
	grid_videos[vidNum].muted = true;
}

function playVid(vidNum){
	var video = grid_videos[vidNum];
	video.muted = !video.muted;
	if(video.muted){
		video.style.filter = "grayscale(100%)";
		numPlaying--;
	}else{
		video.style.filter = "grayscale(0%)";
		numPlaying++;
	}
	console.log(numPlaying);

	if(numPlaying == 4){
		console.log("all playing!");
		for(var i = 0; i < grid_videos.length; i++){
			document.body.style.backgroundColor = "red";
			grid_videos[i].style.animation = "changeColor 1s infinite";
		}
	}else{
		for(var i = 0; i < grid_videos.length; i++){
			document.body.style.backgroundColor = "white";
			grid_videos[i].style.animation = null;
		}
	}
}