console.log('working2');

let input = document.getElementById('input');
let inputEmail = document.getElementById('inputEmail');
let input2 = document.getElementById('input2');
let text = document.getElementById('text');

let btn = document.getElementById('btn');

let conditionList = document.getElementById('condition-list');
let conditionListElements = conditionList.getElementsByTagName('li');

let usernameli = document.getElementById('username-condition');
let emailli = document.getElementById('email-condition');
let passwordli = document.getElementById('password-condition');

const url = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordPattern = /^\d{9,}$/;
btn.disabled = true;

let isUsername;
let isUserEmail;
let isUserPassword;

function validateUsername() {
    text.textContent = '';
    const userName = input.value.trim();
    if (userName.length <= 5) {
        usernameli.style.color = 'red';
        isUsername = false;
    } else {
        usernameli.style.color = 'green';
        isUsername = true;
    }
    enablebutton();
    console.log('isUsername ', isUsername, 'isUserEmail', isUserEmail, 'isUserPassword ', isUserPassword);


}

function validateEmail() {
    text.textContent = '';
    const userEmail = inputEmail.value.trim();
    if (!emailPattern.test(userEmail)) {
        emailli.style.color = 'red';
        isUserEmail = false;
    } else {
        emailli.style.color = 'green';
        isUserEmail = true;

    }
    enablebutton();
    console.log('isUsername ', isUsername, 'isUserEmail', isUserEmail, 'isUserPassword ', isUserPassword);

}

function validatePassword() {
    const userPassword = input2.value.trim();
    if (!passwordPattern.test(userPassword)) {
        passwordli.style.color = 'red';
        isUserPassword = false;
    } else {
        passwordli.style.color = 'green';
        isUserPassword = true;
    }
    enablebutton();

    console.log('isUsername ', isUsername, 'isUserEmail', isUserEmail, 'isUserPassword ', isUserPassword);

}


function enablebutton() {
    text.textContent = '';
    if (isUsername && isUserEmail && isUserPassword) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

input.addEventListener('input', validateUsername);
inputEmail.addEventListener('input', validateEmail);
input2.addEventListener('input', validatePassword);




btn.addEventListener("click", () => {
    let userName = input.value;
    let userPassword = input2.value;
    let userEmail = inputEmail.value;

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            username: userName,
            useremail: userEmail,
            userpassword: userPassword,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            text.textContent = `Register Successfully`;
            text.style.color = '#35b48a';
            input.value = '';
            input2.value = '';
            inputEmail.value = '';

            for (let i = 0; i < conditionListElements.length; i++) {
                conditionListElements[i].style.color = 'black';
            }

            btn.disabled = true;

            isUsername = false;
            isUserEmail = false;
            isUserPassword = false;


        })
})