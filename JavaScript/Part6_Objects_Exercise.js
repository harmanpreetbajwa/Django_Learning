// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    console.log("Employee name length is: "+ this.name.length)

  }
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.

function nameLength(){
  console.log("Employee name length is: "+employee.name.length)
}


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.

function employeeAlert(){
  alert("Name is "+employee.name+", Job is "+employee.job+", Age is "+employee.age+".")
}



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Add a method called lastName that prints
// out the employee's last name to the console.

function lastName(){
  console.log(employee.name.split(" ")[1])
}

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
