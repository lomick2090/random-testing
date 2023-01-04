const email = document.getElementById('email');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConf = document.getElementById('passwordconf');
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const message = document.querySelector('.message')
const submit = document.getElementById('submit');


function validateForm() {
    
    if (email.value === '' || zip.value === '' || password.value === '' || passwordConf.value === '') {
        message.innerHTML = 'Please fill out all forms';
    } else {
        let totalMessages = [];
        if (validateEmail()) {
            totalMessages.push(validateEmail());
        } 
        if (validateZip()) {
            totalMessages.push(validateZip());
        }
        if (validatePassword()) {
            totalMessages.push(validatePassword());
        }
        if (validatePasswordConf()) {
            totalMessages.push(validatePasswordConf());
        }

        message.innerHTML = totalMessages.join(", ")
    }
    
    if (message.innerHTML == '') {
        message.innerHTML ='High Five! Form is complete!';
    }
}

function validateEmail() {
    if (!email.value.match(validEmail)) {
        email.setAttribute('valid', 'false');
        return 'Not a valid email';
    } else {
        email.setAttribute('valid', 'true');
        return '';
    }
}

function validateZip() {
    if (zip.value === '') {
        zip.setAttribute('valid', 'false');
        return "Please input Zip Code";
    } else if (zip.value.length != 5) {
        zip.setAttribute('valid', 'false');
        return "Not a valid Zip Code";
    } else {
        zip.setAttribute('valid', 'true');
        return '';
    }
}

function validatePassword() {
    if (password.value.length < 8) {
        password.setAttribute('valid', 'false');
        return "Password must be 8 character long";
    } 
    else {
        password.setAttribute('valid', 'true');
        return '';
    }
}

function validatePasswordConf() {
    if (password.value !== passwordConf.value) {
        password.setAttribute('valid', 'false');
        passwordConf.setAttribute('valid', 'false');
        return "Passwords do not match"
    } else {
        if (!validatePassword()) {
        password.setAttribute('valid', 'true');
        passwordConf.setAttribute('valid', 'true');
        return '';
        }
    }
}

email.addEventListener('focusout', () => message.innerHTML = validateEmail());
zip.addEventListener('focusout', () => message.innerHTML = validateZip());
password.addEventListener('focusout', () => message.innerHTML = validatePassword());
passwordConf.addEventListener('focusout', () => message.innerHTML = validatePasswordConf());
submit.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
})