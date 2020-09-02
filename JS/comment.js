import { db } from "./config.js";
// import {storage} from './config';

// import firebase from 'firebase-admin';
const comments = document.getElementById("comment-field");
const comment = comments.addEventListener("change", (event) => {
  const commentData = event.target.value;
  return commentData;
});

const postComment = async () => {
  const timestamp = new Date();
  const blogRef = db
    .collection("blogs")
    .doc(localStorage.getItem("article-id"));
  const unionRes = await blogRef.update({
    name: "Lynda Flower",
    comment,
    image: "",
  });
  console.log(blogRef);
};
comments.addEventListener("click", postComment);
