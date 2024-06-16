//Submit Button
export function totalFees() {
  const feeElements = [...document.querySelectorAll("[id^=fee]")];
  return feeElements.reduce((sum, input) => sum + (parseFloat(input.value) || 0), 0);
}

export function submitForm(event, count) {
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
