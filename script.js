console.log('hello');

let input1;
let input2;
let operator;


const clear = () => {
  input1 = undefined;
  input2 = undefined;
  operator = undefined;
}

const setInput = (value) => {
  if (input2) {
    input2 = Number(input2.toString().concat(value));
  } else if (input1) {
      (!operator ? input1 = Number(input1.toString().concat(value)) : input2 = Number(value));
  } else {
    clearScreen();
    input1 = Number(value);
  }
}

const setOperator = (value) => {
  operator = value;
}

const calculate = () => {
  switch(operator) {
    case "addition": document.getElementById('display').innerHTML = add(input1, input2);
      clear();
      break;
    case "subtraction": document.getElementById('display').innerHTML = subtract(input1, input2);
      clear();
      break;
    case "multiplication": document.getElementById('display').innerHTML = multiply(input1, input2);
      clear();
      break;
    case "division": document.getElementById('display').innerHTML = divide(input1, input2);
      clear();
      break;
    default:
      console.log('No input defined');
  }
}

const add = (a,b) => {
  return a+b;
}

const subtract = (a,b) => {
  return a-b;
}

const multiply = (a,b) => {
  return a*b;
}

const divide = (a,b) => {
  return a/b;
}

const displayInput = (value) => {
  document.getElementById('display').textContent += value;
}

// this replaces what is displayed
// const displayInput = (value) => {
//   document.getElementById('screen').innerHTML = value;
// }

const clearScreen = () => {
  document.getElementById('display').innerHTML = ' ';
  clear();
}
