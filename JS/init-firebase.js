import { db } from "./config.js";
import {storage} from "./config.js";

db.settings({});
const  createArticle= document.getElementsByClassName(".article-input");
const addBlogBtnUI = document.querySelector("#add-blog-btn");
// saving data 

const addBlogBtnClicked =()=>{
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let body = document.getElementById("body").value;

  var imageUrls 
     // to get value
     const { files } = document.querySelector('input[type="file"]');
     var storageRef = storage.ref(files[0].name);
     let uploadTask = storageRef.put(files[0]);
     // console.log("upload image", uploadTask);
   
     uploadTask.then((snapshot) => snapshot.ref.getDownloadURL())
     .then((url) => { 
  db.collection('blogs').add({
    title:title,
    description:description,
    body:body,
    url
  })
  .then(function() {
         console.log("Doc successful");
     })
     .catch(function(error) {
        console.error("Error writing doc", error);
     });
    });
}
addBlogBtnUI.addEventListener("click", addBlogBtnClicked);