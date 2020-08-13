const firebaseConfig = {
    apiKey: "AIzaSyAG6etKCA1boqukqISl8uJYsc3hqXKANUQ",
    authDomain: "my-brand-lynda.firebaseapp.com",
    databaseURL: "https://my-brand-lynda.firebaseio.com",
    projectId: "my-brand-lynda",
    storageBucket: "my-brand-lynda.appspot.com",
    messagingSenderId: "1061558652166",
    appId: "1:1061558652166:web:8e422f69045c82839a2287",
    measurementId: "G-QB0ZDPQCTH"
  };

  firebase.initializeApp(firebaseConfig);

  const dbRef = firebase.database().ref();
const blogsRef = dbRef.child('blogs');

// const userListUI = document.getElementById("userList");
// blogsRef.on("child_added", snap => {
//     let user = snap.val();
//     console.log("user");
// });

// function userClicked(e) {
//     var userID = e.target.getAttribute("child-key");
//     const userRef = dbRef.child('blogs/' + userID);
//     const userDetailUI = document.getElementById("userDetail");
//     userDetailUI.innerHTML = ""
//     userRef.on("child_added", snap => {
//         var $p = document.createElement("p");
//         $p.innerHTML = snap.key + " - " + snap.val();
//         userDetailUI.append($p);
//     });
// }

const addBlogBtnUI = document.getElementById("add-blog-btn"); 

const addBlogBtnClicked = () => {
    const addUserInputsUI = document.getElementsByClassName("article-input");

// this object will hold the new user information 
let newBlog = {};

// loop through View to get the data for the model 
for (let i = 0, len = addUserInputsUI.length; i < len; i++) {
    let key = addUserInputsUI[i].getAttribute('name');
    let value = addUserInputsUI[i].value;
    newBlog[key] = value;
}
blogsRef.push(newBlog, function () {
    console.log("data has been inserted");
})
}
addBlogBtnUI.addEventListener("click", addBlogBtnClicked);


