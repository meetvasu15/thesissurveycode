function getDataFromServlet(input1){
	var result = "The inputs received were:- <br> " ;
	result += input1+"<br>";
	result += " I am the output from the servlet<br>";
	var restResultElt = document.getElementById("servletResultContainer");
	restResultElt.innerHTML = result;
	
}

function getDataFromJsp(){
	var result = "The inputs received were:- <br> " ;
	result +="I did not need an input<br>";
	result += " I am the output of the rest API<br>";
	var restResultElt = document.getElementById("jspResultContainer");
	restResultElt.innerHTML = result;
	
}