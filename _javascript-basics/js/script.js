var imgValue = "";
var autoErase = false;
var mult = true;

function erase(erase){
	if(erase.value === "off"){
		erase.value = "on";
		erase.textContent = "Auto Erase: ON";
		autoErase = true;
	}
	else{
		erase.value = "off";
		erase.textContent = "Auto Erase: OFF";
		autoErase = false;	
	}
}

function setImg(value){
	imgValue = value;
	console.log("Now image changed to: " + value);
}

function insertImg(){
	var img;

	var x = event.clientX;
	var y = event.clientY;

	console.log("x position: " + x + ", y position: " + y);

	if(imgValue != "" && y >= 50){

		//first create img element
		//https://www.w3schools.com/jsref/met_document_createelement.asp
		img = document.createElement("IMG");

		if(imgValue === "baam"){
			img.src = "img/baam.png";
		}
		else if(imgValue === "pow"){
			img.src = "img/pow.png";
		}
		else if(imgValue === "bang"){
			img.src = "img/bang.png";
		}
		else if(imgValue === "cry"){
			img.src = "img/cry.png";
		}
		else if(imgValue === "heart"){
			img.src = "img/heart.png";
		}

		document.body.append(img);

		var imgX = x - img.width / 2;
		var imgY = y - img.height / 2;

		img.style.left = imgX + "px";
		img.style.top = imgY + "px";

	}

	if(img != null && autoErase){
		setTimeout(function(){
			img.parentElement.removeChild(img);
		}, 1000);
	}

}