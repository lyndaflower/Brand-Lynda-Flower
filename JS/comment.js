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
      if (doc.exists) {
        const commentSection = document.querySelector("#comment-section");
          doc.data().comments.map(comment => {
            const commentDiv = document.createElement('div');
            const nameElement = document.createElement('h4');
            nameElement.innerHTML = comment.name;
            const commentElement = document.createElement('p');
            commentElement.innerHTML = comment.comment;
            const timestamp = document.createElement('p');
            timestamp.innerHTML = comment.time;
            commentDiv.appendChild(nameElement);
            commentDiv.appendChild(commentElement);
            commentDiv.appendChild(timestamp);
            commentSection.appendChild(commentDiv);
          });
      } else {
        console.log("No such document!");
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