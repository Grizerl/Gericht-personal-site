let form = document.getElementById('js-form');
let formInputs = document.querySelectorAll('.inputValidate'); 
let InputPhone = document.querySelector('.inputPhone');
let submitMessage = document.querySelector('.formMessage');

function validPhoneNumber(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

form.onsubmit = function(event) {  
    event.preventDefault();  

    submitMessage.innerHTML = "";

    let phoneVal = InputPhone.value;
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function(input) { 
        if (input.value === '') {
            console.log('Input not filled');
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        return false;
    }

    if (!validPhoneNumber(phoneVal)) {
        console.log('phone not valid');
        InputPhone.classList.add('error');
        return false; 
    } else {
        InputPhone.classList.remove('error');
    }

    submitMessage.innerHTML = "<h3>Заявка відправлена, з вами обов'язково зв'яжуться</h3>";
    
    form.reset();
};
