let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString();
    while (answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }

    // reset the user attempts
    attempt = 0;
}

function setMessage(msg) {
    document.getElementById('message').innerHTML = msg;
}

function validateInput(input) {
    if (input.value.length == 4) {
        return true;
    }
    setMessage("Guesses must be exactly 4 characters long");
    return false;
}