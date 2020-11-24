// select the DOM nodes

const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

loginButton.addEventListener('click', accountsPage);
registerButton.addEventListener('click', accountsPage);

function accountsPage(){
    if(true)
    document.location = 'accounts.html';
}