const PI = 3.14;
let radius = 3;
let area = radius * radius * PI;
console.log(area);

const one = 1;
const two = '2';
let result = one + two;
console.log(result);

let globalVariable = "I'm Global!";
function myFunction()
{
    let blockVariable = "I'm local block level";
    console.log(blockVariable);
}

myFunction();
console.log(globalVariable);