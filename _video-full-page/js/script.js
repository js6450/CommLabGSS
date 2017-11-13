//Audio / Video DOM references
//https://www.w3schools.com/tags/ref_av_dom.asp

var full_vid;
var options;
var section_times = [7, 14, 21, 27];
var changed = false;

window.onload = function(){
	console.log("loading window");
	full_vid = document.getElementById('full-page');
	options = document.getElementById('options');
};

function checkTime(vid){
	console.log(vid.currentTime.toFixed(1));
	if(changed == false){
		for(var i = 0; i < section_times.length; i++){
			if(Math.floor(vid.currentTime) == section_times[i]){
				vid.pause();
				options.style.display = "block";
			}
		}
	}

}

function changeVideo(vidNum){
	console.log(vidNum);

	full_vid.currentTime = vidNum * 7;

	// if(vidNum == 0){
	// 	full_vid.currentTime = 0;
	// }
	// if(vidNum == 1){
	// 	full_vid.currentTime = 7;
		
	// }
	// if(vidNum == 2){
	// 	full_vid.currentTime = 14;
	// }

	full_vid.play();
	changed = true;
	options.style.display = "none";

	setTimeout(function(){
		changed = false;
	}, 1500);
}