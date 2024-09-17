let text = document.getElementById('text');
let logout = document.getElementById('logout');
let welcome = document.getElementById('welcome');



const url = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';

let userId = localStorage.getItem('userId');

if (userId === null) {
    window.location.href = 'login.html';
} else {
    fetch(url + '/' + userId)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            text.innerText = data.username
            welcome.innerText = "Welcome " + data.username
        })

}

logout.addEventListener('click', () => {
    localStorage.removeItem('userId');
    window.location.href = 'login.html';
})


