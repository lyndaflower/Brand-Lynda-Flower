// import {auth} from './config.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const errorMessage = document.querySelector('#error-message');

const displayLogin =()=>{
    firebase.auth().signInWithEmailAndPassword(email.value,password.value).then(data=>{

        window.location.assign('../pages/adminBlogs.html');
    }).catch(function(error){
        errorMessage.innerHTML = error.message;
        if(error.code == 'auth/wrong-password'){
            setTimeout(()=>{
                errorMessage.style.display='none'
            },3000)
            return error.message;
        }
        return ;
    })
}
document.getElementById('signin').addEventListener('click',displayLogin);