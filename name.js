
function NameSplitFirst() {
var name = document.getElementById("name").value;

var splitByName = name.split('\n');
var listOfNames = "";
var paraOfNames = "";
//console.log(splitByName.length);

for( x = 0; x <= splitByName.length; x++){

var currentName = splitByName[x]; // Full name "Ali Malik"
var splitEntireName = splitByName[x].split(' '); // Split in by spaces "Ali, Malik"
var splitIntoLetters = splitByName[x].split(''); // Split by chars "A,l,i,M,a,l,i,k"
//console.log(splitIntoLetters);

	if(splitEntireName.length == 1){
		//console.log("I need a full name (first and last");
		alert("I need a full name (first and last) " + splitByName[x] + " is not a full name");
	}

	else if(splitByName[x].length >= 2){
		console.log("You're lucky I added middle name support");

		//var firstname = splitEntireName.charAt(0);
		var lastname = splitEntireName[splitEntireName.length-1];
		//console.log(lastname + " is the last name");
		var first_initial = splitIntoLetters[0];

		//console.log(first_initial + " " + lastname);
		document.getElementById("nameShort").innerHTML = first_initial + ". " + lastname;
		listOfNames += first_initial + ". " + lastname + "<br>";
		paraOfNames += first_initial + ". " + lastname + ", ";

	}
	else{
		console.log("tfw the dev (the guy who made this website) dum");
		document.getElementById("nameShort").innerHTML = "Ask Ms.Albano to send me an email <br> this is an error - you found an error in my code. In the email, please add in what you put into the box.";
	}
//	console.log(x);
//	console.log(listOfNames);
	document.getElementById("nameShort").innerHTML = listOfNames + "<br>" + paraOfNames;

}

}



function NameSplitLast() {
var name = document.getElementById("name").value;

var splitByName = name.split('\n');
var listOfNames = "";
var paraOfNames = "";
//console.log(splitByName.length);

for( x = 0; x <= splitByName.length; x++){

var currentName = splitByName[x]; // Full name "Malik Ali"
var splitEntireName = splitByName[x].split(' '); // Split in by spaces "Malik, Ali"
var splitIntoLetters = splitByName[x].split(''); // Split by chars "M,a,l,i,k, ,A,l,i"
//console.log(splitIntoLetters);

	if(splitEntireName.length == 1){
		//console.log("I need a full name (first and last");
		alert("I need a full name (first and last) " + splitByName[x] + " is not a full name");
	}

	else if(splitByName[x].length >= 2){
		//console.log("You're lucky I added middle name support");

		//var firstname = splitEntireName.charAt(0);
		var lastname = splitEntireName[0];
		//console.log(lastname + " is the last name");
		var first_initial = splitIntoLetters[splitEntireName[0].length + 1]; // should return 5 for malik and then Should find A because it's [5]
		//console.log("FIRST INITIAL " + splitEntireName[0].length + " " + first_initial);
		//console.log(first_initial + " " + lastname);
		document.getElementById("nameShort").innerHTML = first_initial + ". " + lastname;
		listOfNames += first_initial + ". " + lastname + "<br>";
		paraOfNames += first_initial + ". " + lastname + ", ";

	}
	else{
		console.log("tfw the dev (the guy who made this website) dum");
		document.getElementById("nameShort").innerHTML = "Ask Ms.Albano to send me an email <br> this is an error - you found an error in my code. In the email, please add in what you put into the box.";
	}
	//console.log(x);
	//console.log(listOfNames);
	document.getElementById("nameShort").innerHTML = listOfNames + "<br>" + paraOfNames;

}

}