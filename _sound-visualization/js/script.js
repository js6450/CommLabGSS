var visualW;
var visualH;

var bgm = document.getElementById('bgm');
var bgmCircle = document.getElementById("spinCircle");
var bgmCircleW;
var bgmCircleTop;
var bgmCircleReduce;
var playing = false;
var vol = 1.0;
var totalTime;
var interval = 2;
var numCircles;
var numSections;
var circleSize = 10;
var circleCreated = false;

window.onload = function(){
	visualW = document.getElementById('visuals').clientWidth;
	visualH = document.getElementById('visuals').clientHeight;

	if(visualW < visualH){
		bgmCircleW = visualW - 200;
		spinCircle.style.width = spinCircle.style.height = bgmCircleW + "px";
	}else{
		bgmCircleW = visualH - 200;
		spinCircle.style.width = spinCircle.style.height = bgmCircleW + "px";
	}
	bgmCircleTop = (visualH - bgmCircleW) / 2 - 50;
	bgmCircle.style.marginTop = bgmCircleTop + "px";

}

function setNumbers(){
	totalTime = bgm.duration;
	numCircles = Math.floor(totalTime / interval);
	numSections = Math.floor(numCircles / 4);
}

function startBGM(){
	if(playing){
		bgm.pause();
		bgmCircle.style.animation = null;
	}else{
		bgm.play();
		bgmCircle.style.animation = "spin 3s infinite linear";
	}
	playing = !playing;
}

function volumeUp(){
	if(vol < 1.0){
		vol += 0.1;
	}else{
		vol = 1.0;
	}
	console.log(vol);
	bgm.volume = vol;
	bgmCircle.style.width = bgmCircleW * vol + "px";
}

function volumeDown(){
	if(vol > 0.0){
		vol -= 0.1;
	}else{
		vol = 0.0;
	}
	console.log(vol);
	bgm.volume = vol;
	bgmCircle.style.width = bgmCircleW * vol + "px";
}

function addCircles(){
	//console.log(Math.floor(bgm.currentTime));
	for(var i = 0; i < numCircles; i++){
		if(Math.floor(bgm.currentTime) == interval * i && !circleCreated){
			// console.log("create new circle!");
			var newCircle = document.createElement("DIV");
			newCircle.className = "otherCircles";
			circleSize++;
			newCircle.style.width = newCircle.style.height = circleSize + "px";
			newCircle.style.left = Math.random() * document.getElementById('visuals').clientWidth + "px";
			newCircle.style.top = Math.random() * document.getElementById('visuals').clientHeight + "px";

			if(i < numSections){
				newCircle.style.backgroundColor = "red";
				newCircle.style.animation = "twist 1s infinite alternate";
			}
			else if(i >= numSections && i < numSections * 2){
				newCircle.style.backgroundColor = "green";
				newCircle.style.animation = "blink 1s infinite alternate";
			}
			else if(i >= numSections * 2 && i < numSections * 3){
				newCircle.style.backgroundColor = "blue";
				newCircle.style.animation = "twirl 2s infinite"
			}
			else if(i >= numSections * 3){
				newCircle.style.backgroundColor = "yellow";
				newCircle.style.animation = "makeBig 1s infinite alternate";
			}

			document.getElementById('otherCircles').append(newCircle);

			bgmCircleW -= 4;
			bgmCircleTop += 2;
			bgmCircle.style.width = bgmCircle.style.height = bgmCircleW + "px";
			bgmCircle.style.marginTop = bgmCircleTop + "px";

			circleCreated = true;
		}

		if(Math.floor(bgm.currentTime) == interval * i + 1){
			circleCreated = false;
		}

	}
}

function disappear(){
	bgmCircle.style.animation = "disappear 3s 1 forwards"
}
