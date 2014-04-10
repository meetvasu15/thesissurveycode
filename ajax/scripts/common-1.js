

// This function is called upon RestAPI button click
function getDataFromRest(input1, input2){
	var result = "The inputs received were:- <br> " ;
	result += input1+"<br>";
	result += input2+"<br>";
	result += " I am the output of the rest API<br>";
	var restResultElt = document.getElementById("restResultContainer");
	restResultElt.innerHTML = result;
	
}



// This function takes in the id of the pane
//result: show the pane whose id is input and hide the other pane 
function toggleTab(tabID) {

	document.getElementById("pane1").style = "";
	document.getElementById("pane2").style = "";
	//show pane 1
	
	if(tabID == 'pane1'){

		//first hide the other pane

		document.getElementById("pane2").style.display = "none"; 
		document.getElementById("pane2-btn").style.background = "#5F789E";
		
		//show the wanted pane
		document.getElementById("pane1").style.display = "block";
		document.getElementById("pane1-btn").style.background = "#D3D7FF";
	}// show pane 2
	else{
		
		//first hide the other pane
		document.getElementById("pane2").style.display = "block"; 
		document.getElementById("pane2-btn").style.background = "#D3D7FF";
		
		//show the wanted pane
		document.getElementById("pane1").style.display = "none";
		document.getElementById("pane1-btn").style.background = "#5F789E";
	}
}



