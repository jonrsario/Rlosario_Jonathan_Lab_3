//alert("JavaScript works!");

//Jonathan Rosario
//Lab 3

//variables
var myMuscle = "Muscle group";
var myMotivation = "\"stay motivated\"";
var myRun = "Miles planning on running? ";
var myWeightlifting = true;

// My Outputs
myWeightlifting = confirm("You are going weighlifting today. True or False");

if (myWeightlifting === true) {
	
	console.log("true - weightlifting");
	
	console.log("It is " + myWeightlifting + " that I am going weightlifting today and " + myMotivation + ".");
	
	myMuscle = prompt("Will you work out upper body or lower body?");
	
	if (myMuscle === "upper body") {
		
		myMuscle = console.log("I will be working on my upper body today.");
	}
		
	if (myMuscle === "lower body"){
		
		myMuscle = console.log("I will be working on my lower body today.");
	}
						
}else{
	console.log(myWeightlifting);
	console.log("false - running instead");
}
			
if (myWeightlifting === false) {
	
	myRun = prompt("Are you running any extra miles to the usual 3?" ); 
	
	myRun = parseFloat(myRun);
	
	console.log("I am going to run " + (myRun + 3) + " miles today " + "and " + myMotivation + ".");

}
		
	



