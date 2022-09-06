let usernameRegister = document.getElementById('usernameRegister');
let usernameLogin = document.getElementById('usernameLogin')
let password = document.getElementById('password');
let registerButton = document.getElementById('registerButton');
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('');

function onRegister() {
    if(usernameRegister.value == localStorage.getItem('username')){
        alert('Username already registered, please login');
        console.log("proses redirect....")
        window.location.href = "login.html";
        return false;
    }
    else if(usernameRegister.value == 'admin'){
        alert('Unauthorized username');
        console.log("proses redirect....")
        window.location.href = "register.html";
        return false;
    }
    else {
        localStorage.setItem('username', usernameRegister.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('role', 'user');
        alert('Register Success');
        window.location = 'dashboardUser.html';
        return false;
    }
}

function onLogin() {
    if(usernameLogin.value == 'admin' && password.value == 'root'){
        alert('Welcome admin');
        window.location.href = 'dashboardAdmin.html';
        return false;
    }
    else if(usernameLogin.value == localStorage.getItem('username') && password.value == localStorage.getItem('password')){
        alert(`Welcome ${username.value}`);
        window.location.href = 'dashboardUser.html';
        return false;
    }
    else{
        alert('Username not found');
        location.reload();
    }
}