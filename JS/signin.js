// firebase.auth().onAuthStateChanged((user) =>{
//     if(!user){
//       window.location.replace('../pages/signin.html');
//     }
//     })
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessage = document.querySelector("#error-message");

const displayLogin = (e) => {
  e.preventDefault();
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      // localStorage.setItem('user',data.user);
      window.location.assign("../pages/adminBlogs.html");
    })
    .catch(function (error) {
      errorMessage.innerHTML = error.message;
      if (error.code == "auth/wrong-password") {
        setTimeout(() => {
          errorMessage.style.display = "none";
        }, 3000);
        return error.message;
      }
      return;
    });
};
document.getElementById("signin").addEventListener("click", displayLogin);
