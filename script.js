console.log('hello');

let input1;
let input2;
let operator;


const clear = () => {
  input1 = undefined;
  input2 = undefined;
  operator = undefined;
}

const setInput = (v) => {
  if (input2) {
    input2 = Number(input2.toString().concat(v));
  } else if (input1) {
      if (!operator) {
        input1 = Number(input1.toString().concat(v));
      } else {
        input2 = Number(v);
    }
  } else {
    clearScreen();
    input1 = Number(v);
  }
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
  }
}

const add = (a,b) => {
  operator = 'addition';
  return a+b;
}

const subtract = (a,b) => {
  operator = 'subtraction';
  return a-b;
}

const multiply = (a,b) => {
  operator = 'multiplication';
  return a*b;
}

const divide = (a,b) => {
  operator = 'division';
  return a/b;
}

const displayInput = (value) => {
  document.getElementById('display').textContent += value;
}

// const displayInput = (value) => {
//   document.getElementById('screen').innerHTML = value;
// }

const clearScreen = () => {
  document.getElementById('display').innerHTML = ' ';
  clear();
}
