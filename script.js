
// turn logout to login
function logout(element) {
    let loginBtn = document.querySelector('#login-btn');
    loginBtn.innerText = 'Log in'
}

// function to increment likes
function increment(element) {
    element.innerText++;
}

//function to decrement likes
function decrement(element) {
    if (element.innerText > 0) {
        element.innerText--;
    }
}


