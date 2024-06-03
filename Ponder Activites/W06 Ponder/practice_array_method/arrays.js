const steps = ["one", "two", "three"];

const grade = ['A', 'B', 'A'];

const food = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const numbers = [12, 34, 21, 54];
const luckNumber = 21;

let numberLuck = numbers.indexOf(luckNumber);

const foodLength = food.filter((food) => food.length > 6);

function lookupGrade(grade) 
{
    let points = 0;
    if (grade === 'A') 
        {
            points = 4;
        } 
    else if (grade === 'B') 
        {
            points = 3;
        }
    else if (grade === 'C') 
        {
            points = 2;
        }
    else if (grade === 'D') 
        {
            points = 1;
        } 

    return points;
}

const gradePoints = grade.map(lookupGrade);

const totalPoints = gradePoints.reduce((total, item) => total + item);
const gpaPoints = totalPoints / gradePoints.length;

function listTemplate(step) 
{
  return `<li>${step}</li>`;
  //the html string made from step
}

const stepsHtml = steps.map(listTemplate);
const gradeHtml = gradePoints.map(listTemplate);
const foodsHtml = foodLength.map(listTemplate);
// use map to convert the list from strings to HTML

document.querySelector("#myList").innerHTML = stepsHtml.join('');
document.querySelector("#mylist").innerHTML = gradeHtml.join('');
// document.querySelector("#mylist").innerHTML = foodsHtml.join('');
// set the innerHTML


// I have no idea why this is here. It was in the description. 
// let new_array = arr.map(function callback( currentValue[, index[, array]]) 
// {
//     // return element for new_array
// } [, thisArg])