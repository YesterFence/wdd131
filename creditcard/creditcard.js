function isCardNumberValid(number) 
{
    const validNumbers = [
        '1234123412341234',
        '1234567890123456',
        "1234567891011112"
    ];

    return validNumbers.includes(number);
}

function displayError(message)
{
    document.querySelector('.errorMsg').innerHTML = message;
}

function submitHandler(event)
{
    event.preventDefault();
    let errorMessage = '';
    console.log(this.cardNumber.value)
    displayError('');
    if (isNaN(this.cardNumber.value))
    {
        errorMessage += 'Card number must be a number\n'
    }
    else if (!isCardNumberValid(this.cardNumber.value)) 
    {
        errorMessage += 'Card number is not valid\n';
    }
    if (errorMessage !== '') 
    {
        displayError(errorMessage);
        return false;
    }

    // return true;

    //check date
    const currentDate = new Date()

    if ('20' + this.cardYear.value < currentDate.getFullYear()) 
        {
            errorMessage += 'Card is expired\n'
        } else if (this.cardMonth.value < currentDate.getMonth()) {
            errorMessage += 'Card is expired\n'
        }
    if (errorMessage !== '') {
        displayError(errorMessage)
        return false
    }
    alert('Card submitted successfully!');
    return true
}

document.querySelector('#creditcard').addEventListener('submit', submitHandler)