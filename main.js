// select the DOM nodes

const registerBtn = document.getElementById('btn');

registerBtn.addEventListener('click', showRegisterPage);

// direct to the register page
function showRegisterPage(){
    if(true)
    document.location = 'register.html';
}


// submit button

const submitButton = document.getElementById('button');
const emailInput = document.getElementById('email');
submitButton.addEventListener('click', clearFields);

function clearFields(e){
    if(true){
        e.preventDefault();
        emailInput.value = "";
    }
}

