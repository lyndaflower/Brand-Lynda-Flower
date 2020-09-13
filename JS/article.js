import { db } from "./config.js";
import { storage } from "./config.js";

const singleArticleId = localStorage.getItem("article-id");
db.collection("blogs")
  .doc(singleArticleId)
  .get()
  .then((snapshot) => {
    // console.log(snapshot.data().url);
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
