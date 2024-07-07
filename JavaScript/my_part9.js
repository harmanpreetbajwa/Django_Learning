firstName = prompt("Enter your first name: ");
lastName = prompt("Enter your last name: ");
age = prompt("Enter your age: ");
height = prompt("Enter your height in cms: ");
petName = prompt("Enter your pet name: ");
pet_last_index = petName[petName.length-1]


if ((firstName[0]===lastName[0]) && (21 <= age <=29) && (height >= 170) && (pet_last_index=='y') ){
    console.log("Congrats!! You have passed the spyig test. ");
}
else{
    console.log("You have failed !!");
}

console.log(firstName[0]===lastName[0]);
console.log(21 <= age <=29)
console.log(height>=170)
console.log(pet_last_index)
console.log(pet_last_index=='y')
    
