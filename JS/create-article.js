import { db, storage } from "./config.js";

firebase.auth().onAuthStateChanged((user) => {
   if (!user) {
     window.location.replace("../pages/signin.html");
   }
 });
 
db.settings({});
const addBlogBtnUI = document.querySelector("#add-blog-btn");
// saving data add-blog-btn
const addBlogBtnClicked = () => {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let body = document.getElementById("body").value;
  // to get value
  const { files } = document.querySelector('input[type="file"]');
  var storageRef = storage.ref(files[0].name);
  let uploadTask = storageRef.put(files[0]);
  // console.log("upload image", uploadTask);

  uploadTask
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      db.collection("blogs")
        .add({
          title: title,
          description: description,
          body: body,
          comments: [],
          url,
        })
        .then(function () {
          if (confirm("Article created successfully")) {
          } else {
          }
          window.location.replace("../pages/adminBlogs.html");
        })
        .catch(function (error) {
          console.error("Error writing doc", error);
        });
    });
};
addBlogBtnUI.addEventListener("click", addBlogBtnClicked);
