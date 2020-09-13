import { db } from "./config.js";
import { storage } from "./config.js";

const singleArticleId = localStorage.getItem("article-id");
db.collection("blogs")
  .doc(singleArticleId)
  .get()
  .then((snapshot) => {
    const articlesSection = document.querySelector("section.article");
    const article = document.createElement("article");
    const blogTitle = document.createElement("h2");
    const blogDescription = document.createElement("h2");
    const articleImage = document.createElement("img");
    const blogBody = document.createElement("p");

    const articleTitle = document.createTextNode(snapshot.data().title);
    const articleBody = document.createTextNode(snapshot.data().body);
    const articleDescription = document.createTextNode(
      snapshot.data().description
    );
    articleImage.src = snapshot.data().url;

    blogTitle.setAttribute("class", "article-title");
    blogDescription.setAttribute("class", "desc");
    blogBody.setAttribute("class", "article-body");
    articleImage.setAttribute("class", "image");
    articleImage.setAttribute("alt", "image");

    blogTitle.appendChild(articleTitle);
    article.appendChild(blogTitle);
    blogDescription.appendChild(articleDescription);
    article.appendChild(blogDescription);
    article.appendChild(articleImage);
    blogBody.appendChild(articleBody);
    article.appendChild(blogBody);
    articlesSection.appendChild(article);
  });
const deleteFunction = () => {
  document.getElementById("id01").style.display = "block";
};
document.getElementById("delete").addEventListener("click", deleteFunction);
const modal = () => {
  document.getElementById("id01").style.display = "none";
};
document.getElementById("modal").addEventListener("click", modal);
const cancel = () => {
  document.getElementById("id01").style.display = "none";
};
document.getElementById("cancel").addEventListener("click", cancel);

const deleteArticle = () => {
  db.collection("blogs")
    .doc(singleArticleId)
    .delete()
    .then(function () {
      console.log("Document successfully deleted!");
      setTimeout(function () {
        window.location.replace("../pages/blog-landing.html");
      }, 3000);
    })
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });
};
document
  .getElementById("deleteArticle")
  .addEventListener("click", deleteArticle);
const editingArticle = () => {
  window.location.assign("../pages/editing-article.html");
};
document.getElementById("edit").addEventListener("click", editingArticle);

const logout = () => {
  firebase.auth().signOut();
  window.location.assign("../pages/signin.html");
};
document.getElementById("logout").addEventListener("click", logout);
