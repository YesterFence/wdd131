import {addParticipant} from './Templates.js';

//  Participation adding
let count = 1;
document.getElementById('add').addEventListener('click', addParticipant);


//Submit Button

function totalFees() {
  const feeElements = [...document.querySelectorAll("[id^=fee]")];
  return feeElements.reduce((sum, input) => sum + (parseFloat(input.value) || 0), 0);
}


function submitForm(event) {
  event.preventDefault();

  const total = totalFees();
  const adultName = document.querySelector('input[name="adult_name"]').value;
  const formElement = document.querySelector('form');
  const summaryElement = document.getElementById('summary');

  formElement.style.display = 'none';
  summaryElement.style.display = 'block';

  summaryElement.innerHTML = `Thank you ${adultName} for registering. 
  You have registered ${count} participants and owe $${total.toFixed(2)} in Fees.`;
}

document.getElementById('add').addEventListener('click', addParticipant);
document.querySelector('form').addEventListener('submit', submitForm);
document.getElementById('summary').style.display = 'none';