
// select btn item 
// const inputEmail = document.getElementById('user-email');
// const inputPassword = document.getElementById('user-email');


const loginBtn = document.getElementById('login-submit');
loginBtn.addEventListener('click' , function (){
    // console.log('login btn click');
    const inputEmail = document.getElementById('user-email').value;
    const inputPassword = document.getElementById('user-password').value;

    //if condition 
    if (inputEmail == 'user@demo.com' && inputPassword == 'admin'){
        window.location.href = 'banking.html'
    }else{
        alert('invalid password')
    }

})