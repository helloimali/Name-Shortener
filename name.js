// JS

var name = "Paul Steve Panakkal" // try "Paul", "Paul Steve"
var first_name = name.split(' ')[0]

var fn = first_name.charAt(0)
var last_name = name.substring(first_name.length).trim()
console.log(first_name)
console.log(last_name)
console.log(fn)

////





function NameSplit(){
var name = document.getElementById("name").value;
//var name = "Paul Steve Panakkal"; // need to take mass input
// var splitByname[] = name.split('\n')
var split = name.split(' ');
//var splitname = split.split(' ');
console.log(split);
console.log(split[1]);
console.log(split.length);

var listOfNames = null;

if(split.length == 1){
	console.log("I need a full name (first and last");
	document.getElementById("nameShort").innerHTML = "I need a full name (first and last)";
}

else if(split.length >= 2){
	console.log("You're lucky I added middle name support");

	var firstname = name.split(' ')[0];
	var lastname = name.split(' ')[split.length-1];
	var first_initial = firstname.charAt(0);

	console.log(first_initial + " " + lastname);
	document.getElementById("nameShort").innerHTML = first_initial + ". " + lastname;
	listOfNames += first_initial + ". " + lastname + \n;

}
else{
	console.log("tfw the dev dum");
	document.getElementById("nameShort").innerHTML = "Ask Ms.Albano to send me an email <br> this is an error - you found an error in my code. In the email, please add in what you put into the box.";
}


}











