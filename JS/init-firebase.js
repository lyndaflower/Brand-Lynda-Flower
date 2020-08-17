const firebaseConfig = {
  apiKey: "AIzaSyAG6etKCA1boqukqISl8uJYsc3hqXKANUQ",
  authDomain: "my-brand-lynda.firebaseapp.com",
  databaseURL: "https://my-brand-lynda.firebaseio.com",
  projectId: "my-brand-lynda",
  storageBucket: "my-brand-lynda.appspot.com",
  messagingSenderId: "1061558652166",
  appId: "1:1061558652166:web:8e422f69045c82839a2287",
  measurementId: "G-QB0ZDPQCTH",
};

firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
const blogsRef = dbRef.child("blogs");

const addBlogBtnUI = document.getElementById("add-blog-btn");
var imageUrls 
const upload = () => {
  // to get value
  const { files } = document.querySelector('input[type="file"]');
  console.log("value", files[0]);

  var storageRef = firebase.storage().ref(files[0].name);
  let uploadTask = storageRef.put(files[0]);
  console.log("upload image", uploadTask);
  //   uploadTask.then((err, res) =>{
  uploadTask.then((snap) => {
    console.log(snap.metadata.downloadURLs);
    imageUrls = snap.metadata.downloadURLs
  });
};

const addBlogBtnClicked = () => {
  const addUserInputsUI = document.getElementsByClassName("article-input");

  // this object will hold the new user information
  let newBlog = {};

  // loop through View to get the data for the model
  for (let i = 0, len = addUserInputsUI.length; i < len; i++) {
    let key = addUserInputsUI[i].getAttribute("name");
    let value = addUserInputsUI[i].value;
    newBlog[key] = value;
  }

  var blog = {...newBlog, image:imageUrls}
  console.log(blog);
  blogsRef.push(blog, function () {
    console.log("data has been inserted");
  });
};
// addBlogBtnUI.addEventListener("click", addBlogBtnClicked);

const uploadBtn = document.querySelector("#upload");
// uploadBtn.addEventListener("click", upload);

const loadAllArticles = () => {
  const blogsRef = firebase.database().ref("blogs");
  var blogSection = document.querySelector("#blog-section");
  blogsRef.on("child_added", (snap) => {
    console.log(snap.val().image+"snapValue");

    let blogCard = document.createElement("div");
    let blogImage = document.createElement("div");
    let image = document.createElement('img');
    let blogDetails = document.createElement("div");
    let blogTitle = document.createElement("h1");
    blogTitle.innerHTML = snap.val().title;
    let blogDesc = document.createElement("h2");
    blogDesc.innerHTML = snap.val().description;
    let blogBody = document.createElement("p");
    blogBody.innerHTML = snap.val().body;

    blogImage.append(image);
    blogDetails.append(blogTitle);
    blogDetails.append(blogDesc);
    blogDetails.append(blogBody);


    blogCard.append(blogDetails);
    blogCard.append(blogImage);
    blogSection.append(blogCard);

    console.log();
  });
};
