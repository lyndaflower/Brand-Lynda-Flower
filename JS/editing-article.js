import { db } from "./config.js";

const singleArticleId = localStorage.getItem("edit-article");
const blogRef = db.collection("blogs").doc(singleArticleId);
const editTitle = document.querySelector("#title");
const editDescr = document.querySelector("#description");
const editBody = document.querySelector("#body");
const loadArticle = () => {
  blogRef.get().then((snapshot) => {
    console.log(snapshot.data(), document.querySelector("#title"));

    editTitle.value = snapshot.data().title;
    editDescr.value = snapshot.data().description;
    editBody.value = snapshot.data().body;
  });
};
window.addEventListener("load", loadArticle);

let title;
let description;
let body;
let image;

editTitle.addEventListener("change", (event) => {
  title = event.target.value;
});
editDescr.addEventListener("change", (event) => {
  description = event.target.value;
});
editBody.addEventListener("change", (event) => {
  body = event.target.value;
});
const editArticles = () => {
  return blogRef.update({
    title: title ? title : editTitle.value,
    description: description ? description : editDescr.value,
    body: body ? body : editBody.value,
  });
  console.log(title, description, body);
};
document.querySelector("#send-btn").addEventListener("click", editArticles);
