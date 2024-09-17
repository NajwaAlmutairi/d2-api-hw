let text = document.getElementById('text');
let logout = document.getElementById('logout');
let welcome = document.getElementById('welcome');



const url = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';

let userId = localStorage.getItem('userId');
let userName = localStorage.getItem('userName');


if (userId === null) {
    window.location.href = 'login.html';
} else {
    text.innerText = userName
    welcome.innerText = "Welcome " + userName

}

logout.addEventListener('click', () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    window.location.href = 'login.html';
})


