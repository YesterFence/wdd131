function getGrades(inputSelector) 
{
    // get grades from the input box
    const gradesInput = document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    let gradesArray = gradesInput.split(',');
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    gradesArray = gradesArray.map(grade => grade.trim().toUpperCase());
    // return grades
    return gradesArray;
}

function lookupGrade(grade) 
{
    points = 0;

    // converts the letter grade to it's GPA point value and returns it
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
            points = 2
        }
    else if (grade === 'D') 
        {
            points = 1
        } 
    else 
        {
            // Return a default value if the grade is not recognized
            return points;
        }
}

function calculateGpa(grades) 
{
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const totalGpa = grades.reduce((total, grade) => 
    {
        const gpa = lookupGrade(grade);
        
        if (gpa !== -1.0) 
            {
                return total + gpa;
            } 
        else 
        {
            // If the grade is not recognized, don't add it to the total
            return total;
        } 
    }, 0);

    // calculates the GPA
    const averageGpa = totalGpa / grades.length;
    const roundedGpa = Math.round(averageGpa * 100) / 100;

    // return the GPA
    return roundedGpa;
}

function outputGpa(gpa, selector) 
{
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    document.querySelector(selector).textContent = `GPA: ${gpa}`;
}
  
function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    const grades = getGrades('#grades');

    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grades);
    
    // display the gpa
    outputGpa(gpa, '#output');
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);