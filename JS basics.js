//Once you complete a problem, open up Chrome and check the answer in the console.




//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

var isTyler = function (userName) {
  if (userName === "Tyler") {
    return true;
   } else {
    return false;
  }
}
//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here 
var getName = function (argument) {
  var name = prompt("what is your name?");
  return name;
}


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  var welcome = function (name) {
    return 'welcome ' + myName;
  }


//Next problem




//What is the difference between arguments and parameters?


  //Answer Here
  Arguments: are what the function is actually useing to do something.

  Parameters: are what name what is happening.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

NaN
null
0
""
false
undifined





//Next Problem



//Create a function called myName that returns your name

  //Code Here
var myName = function (name) {
	return 'garrett';
}
//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
var outerFn = function () {
  return 'garrett'
}
//Now save the result of invoking outerFn into a variable called innerFn. WHEN THE APPLE GUY MADE THE COMPUTER SAY HIS NAME. JUST LIKE YOU MADE A FUNCTION SAY YOUR NAME 'WHEN IT SAID MY NAME I HAD FORGGOT THAT I HAD MADE THE FUNCTION MY NAME``' :)

  //Code Here
var innerFn = outerFn();


//Now invoke innerFn.
innerFn