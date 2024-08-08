document.getElementById('formvalidation').addEventListener('submit',function(event){

 document.getElementById('usernameError').textContent = '';
 document.getElementById('emailError').textContent = '';
 document.getElementById('passwordError').textContent ='';
 document.getElementById('confirmError').textContent = '';


 let isValid = true;

let username = document.getElementById('username').value.trim();
let email = document.getElementById('email').value.trim();
let password = document.getElementById('password').value;
let confirm = document.getElementById('confirm').value;



if (username === ""){
    document.getElementById('usernameError').textContent = " username is required";
 isValid = false;
}


let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if( email === "" || !emailpattern.test(email)){
    document.getElementById('emailError').textContent = "email is not valid"
    isValid = false;
}

if (password.length < 6 ){
    document.getElementById('passwordError').textContent = "password must me at least 6 characters long"
isValid = false;
}

if (password !== confirm) {
    document.getElementById('confirmError').textContent = 'Passwords do not match.';
    isValid = false;
}

if(!isValid){
    event.preventDefault();
}else {
    
    event.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password',password)
    window.open('user.html');
}



});


