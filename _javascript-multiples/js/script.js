//list colors you want to choose from 
//in the array as string (between quotation marks)
var colors = ["red", "pink", "blue", "yellow", "orange", "green"];
var opacityValue = 1.0;

window.onload = function(){

	for(var i = 0; i < 150; i++){
		//code inside here will run 150 times

		var div = document.createElement("DIV");

        //assign class "cicle" for these div elements
		div.className = "circle";

        //if you were setting these styles in css, it would be equivalent to
	    //div{
	    //   width: 15px;
	    //   height: 15px;
	    //   border-radius: 50%;
	    //   background-color: red;
	    //}
		div.style.width = "15px";
		div.style.height = "15px";
		div.style.borderRadius = "50%";

        //instead of previous div.style.backgroundColor = "red";
        //colors.length returns the number of elements in the colors array
		var colorNum = Math.floor(Math.random() * colors.length);
		div.style.backgroundColor = colors[colorNum];

        //if the random number we get from Math.random() * window.innerWidth is, for example, 350px
        //this line in css would be
        //left: 350px;
		div.style.left = Math.random() * window.innerWidth + "px";

        //randomly assign top value
	    //between -50 and -150
		div.style.top = - Math.random() * 100 - 50 + "px";


		div.style.animationDelay = Math.random() * 10 + "s";

		document.body.append(div);
	}
}

function changeTrans(val){
    //circles variable contains the array of div elements with class "circle"
	var circles = document.getElementsByClassName('circle');

	if(val === "up"){
        //only increase opacityValue if it is less than 1.0
		if(opacityValue < 1.0){
            //opacityValue = opacityValue + 0.1;
			opacityValue += 0.1;
		}
	}else{
        //only decrease opacityValue if it is greater than 0.0
		if(opacityValue > 0.0){
            //opacityValue = opacityValue - 0.1;
			opacityValue -= 0.1;
		}
	}

    //use for loop to set opacity of all div elements with class "circle"
    //using value of opacityValue variable
	for(var i = 0; i < circles.length; i++){
		circles[i].style.opacity = opacityValue;
	}
}