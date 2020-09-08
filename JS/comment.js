import { db } from "./config.js";
// import {storage} from './config';

// import firebase from 'firebase-admin';
let textData;


const comments = document.getElementById("comment-field");
const button = document.getElementById("btn-post");

comments.addEventListener('change', (event) => {
  textData = event.target.value;  
})

const getComments = () =>{
  const blogRef = db
  .collection("blogs")
    .doc(localStorage.getItem("article-id"));

    blogRef.get().then((doc) => {
      if(doc.exists && doc.data().comments[0])
      {
        console.log(doc.data().comments.length);
        const commentSection = document.querySelector("#comment-section");
          doc.data().comments.map(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.innerHTML = `<div class="comm">
            <img src="https://img.pngio.com/person-individually-alone-icon-png-image-font-awesome-user-svg-person-icon-png-920_998.png">
            <div class="comment__details">
                <div class="name">${comment.name}</div>
                <p>${comment.comment}</p>
            </div>
            </div>`;
            commentSection.appendChild(commentDiv);
          });
          
      } else {
        const noComment= document.querySelector("#comment-title");
        noComment.style.display ='none';
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }
  window.addEventListener('load', getComments, false);

const postComment = () => {
  const timestamp = new Date();
  const hours = timestamp.getHours();
  let minutes = timestamp.getMinutes();
  minutes = minutes > 9 ? minutes : '0' + minutes;
  const blogRef = db
    .collection("blogs")
    .doc(localStorage.getItem("article-id"));
  blogRef.update({
    comments: firebase.firestore.FieldValue.arrayUnion({ name: 'Doreen Shami', comment: textData, image: '', time: `${hours}:${minutes}`})

  });
  setTimeout(function() {
    location.reload();
  }, 3000);
};


button.addEventListener("click", postComment);