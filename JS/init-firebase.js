var firebaseConfig = {
  apiKey: "AIzaSyDsZzR0HFcDDtdVEK-SvkVbcOpC8HjJ0yQ",
  authDomain: "personal-website-4f106.firebaseapp.com",
  databaseURL: "https://personal-website-4f106.firebaseio.com",
  projectId: "personal-website-4f106",
  storageBucket: "personal-website-4f106.appspot.com",
  messagingSenderId: "374502379076",
  appId: "1:374502379076:web:2bbbd4096010aef7d37611",
  measurementId: "G-XL6FTWZPBP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({});

db.collection('blogs').get().then((snapshot) =>{
snapshot.docs.forEach(docs => {
  console.log(docs.data());
});
})

const  createArticle= document.getElementsByClassName(".article-input");
// saving data

const addBlogBtnClicked =()=>{
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let body = document.getElementById("body").value;
  db.collection("blogs").docs().set({
    title:title,
    description:description,
    body:body
  })
  .then(function() {
         console.log("Doc successful");
     })
     .catch(function(error) {
        console.error("Error writing doc", error);
     });
}
  // const addBlogBtnUI = document.getElementById("add-blog-btn");
  // var imageUrls 
  // const chooseFile=() => {
  //   // to get value
  //   const { files } = document.querySelector('input[type="file"]');
  //   // console.log("value", files[0]);
  
  //   var storageRef = firebase.storage().ref(files[0].name);
  //   let uploadTask = storageRef.put(files[0]);
  //   // console.log("upload image", uploadTask);
  
  //   uploadTask.then((snap) => {
  //     // console.log(snap.metadata.downloadURLs);
  //     imageUrls = snap.metadata.downloadURLs;
  //   });
  // };
  
  // const addBlogBtnClicked = () => {
   
  
  //   // this object will hold the new user information
  //   let newBlog = {};
  
  //   // loop through View to get the data for the model
  //   for (let i = 0, len = addUserInputsUI.length; i < len; i++) {
  //     let key = addUserInputsUI[i].getAttribute("name");
  //     let value = addUserInputsUI[i].value;
  //     newBlog[key] = value;
  //   }
  
  //   var blog = {...newBlog, image:imageUrls}
  //   console.log(blog);
  //   blogsRef.push(blog, function () {
  //     console.log("data has been inserted");
  //   });
  // };
  // addBlogBtnUI.addEventListener("click", addBlogBtnClicked);
  
  // const uploadBtn = document.querySelector("#upload");
  // uploadBtn.addEventListener("click", upload);