//at the beginning no source for img html tag is selected
//autoErase feature is turned off
var imgValue = "";
var autoErase = false;

//variable "erase" saves "this" that we pass on from index.html
function erase(erase){
	if(erase.value === "off"){
		//change value attribute of button tag
		erase.value = "on";
		//change text between <button> and </button>
		erase.textContent = "Auto Erase: ON";
		//set value of autoErase to true
		autoErase = true;
	}
	else{
		//change value attribute of button tag
		erase.value = "off";
		//change text between <button> and </button>
		erase.textContent = "Auto Erase: OFF";
		//set value of autoErase to false
		autoErase = false;	
	}
}

//variable "value" saves this.value that we pass on from index.html
function setImg(value){
	imgValue = value;
	console.log("Now image changed to: " + value);
}

function insertImg(){
	var img;

	//get x and y position of mouse click
	var x = event.clientX;
	var y = event.clientY;

	console.log("x position: " + x + ", y position: " + y);

	//check if image source is set
	//(not an empty string)
	//AND if y position of mouse click is greater than 50
	if(imgValue != "" && y >= 50){

		//first create img element
		//https://www.w3schools.com/jsref/met_document_createelement.asp
		img = document.createElement("IMG");

		//change source of the img html tag
		//depending on which button was clicked
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

		//add created img html element
		//inside of <body> element
		document.body.append(img);

		//img.width returns width of img html element
		var imgX = x - img.width / 2;
		//img.height returns height of img html element
		var imgY = y - img.height / 2;

		//make sure to add unit of measurement
		//"px" at the end
		img.style.left = imgX + "px";
		img.style.top = imgY + "px";

	}

	//make sure there is an img html tag to remove
	//AND autoErase feature is on (autoErase is set to true)
	if(img != null && autoErase){
		//remove img html tag 1000 millisecons (1 second)
		//after it has been created
		setTimeout(function(){
			img.parentElement.removeChild(img);
		}, 1000);
	}

}