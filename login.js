let loginName = document.getElementById('loginName');
let loginPassword = document.getElementById('loginPassword');
let loginbtn = document.getElementById('loginbtn');
let logintext = document.getElementById('logintext');

const url = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';

let mydata = [];


if (localStorage.getItem('userId') !== null) {
    // If 'userId' exists, remove it from localStorage
    localStorage.removeItem('userId');
}

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        mydata = data;
        // console.log("mydata");
        // console.log(mydata);
    })


loginbtn.addEventListener('click', () => {
    let logindata = mydata.filter(element => {
        return element.username === loginName.value.trim() && element.userpassword === loginPassword.value.trim();
    });

    console.log(logindata.length);

    if (logindata.length === 1) {
        console.log("login Successfully")
        login(logindata[0].id)
    } else {
        logintext.innerText = "please try again!"
        console.log("please try again!")
    }
})


function login(id) {
    fetch(url + '/' + id)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            localStorage.setItem('userId', data.id);
            window.location.href = 'home.html';
        })
}




