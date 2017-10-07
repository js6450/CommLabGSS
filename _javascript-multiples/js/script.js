var colors = ["red", "pink", "blue", "yellow", "orange", "green"];
var opacityValue = 1.0;

window.onload = function(){

	for(var i = 0; i < 150; i++){

		div = document.createElement("DIV");

		div.className = "circle";
		div.style.width = "15px";
		div.style.height = "15px";
		div.style.borderRadius = "50%";

		div.style.animationDelay = Math.random() * 10 + "s";

		var colorNum = Math.floor(Math.random() * colors.length);
		div.style.backgroundColor = colors[colorNum];

		div.style.left = Math.random() * window.innerWidth + "px";
		div.style.top = - Math.random() * 100 - 50 + "px";

		document.body.appendChild(div);
	}
}

function changeTrans(val){
	var circles = document.getElementsByClassName('circle');

	if(val === "up"){
		if(opacityValue < 1.0){
			opacityValue += 0.1;
		}
	}else{
		if(opacityValue > 0.0){
			opacityValue -= 0.1;
		}
	}

	for(var i = 0; i < circles.length; i++){
		circles[i].style.opacity = opacityValue;
	}
}