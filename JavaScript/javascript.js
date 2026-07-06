// debugger;
// console.log('Global Execution Context Start');

// var globalVariable = 'I am a global Variable';

// console.log(globalVariable);
// console.log(greet());
// greet();

// console.log('Global Execution Context End');

// // Function Declaration
// function greet() {
//   var name = 'Hastag';
//   console.log('Inside Global Function');
// }

// --> check even od / if else 
function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Examples
console.log(checkEvenOrOdd(4));  // "even"
console.log(checkEvenOrOdd(7));  // "odd"

// --> canDrive / nested if else

function canDrive(age) {
  if (age >= 18) {
    return "You can drive.";}
  else if(age >= 16) {
    return "You can drive with supervision.";
  } else {
    return "You cannot drive.";
  }
}

// --> print grade based on marks / swith
function printGrade(marks) {
  switch (true) {
    case (marks >= 90):
      return "A";
    case (marks >= 80):
      return "B"; 
    case (marks >= 70):
      return "C";
    case (marks >= 60):
      return "D";
    default: 
      return "F";
  }}

  //for loop
  function printNumbers() {
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
  }

  // for-in
  function printObjectProperties(obj) {
    for (let key in obj) {
      console.log(key, obj[key]);
    }
  }

  //for of
  function printArrayElements(arr) {
    for (let element of arr) {
      console.log(element);
    }
  }

  //while
  function printNumbersWhile() {
    let i = 1;
    while (i <= 5) {
      console.log(i);
      i++;
    } }

  // do-while 
  function printNumbersDoWhile() {
    let i = 1;
    do {
      console.log(i);
      i++;
    } while (i <= 5); 
  }1812