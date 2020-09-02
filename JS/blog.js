import { db } from "./config.js";
// import {storage} from "./config";

const fetchArticle = (id) => {
  localStorage.setItem("article-id", id);
  window.location.assign("article-list.html");
};

const loadAllArticles = (docs) => {
  var blogSection = document.querySelector("#blog-section");

  // blog-card
  let blogCard = document.createElement("div");
  let blogDetails = document.createElement("div");
  let blogDesc = document.createElement("h2");
  blogDesc.innerHTML = docs.data().description;
  let blogBody = document.createElement("p");
  blogBody.innerHTML = `${docs.data().body.slice(0, 150)}...  `;

  // blog-cover-image
  let image = document.createElement("img");
  let blogImage = document.createElement("div");
  image.src = docs.data().url;

  // blog title
  let blogTitle = document.createElement("h1");
  blogTitle.innerHTML = docs.data().title;

  // blog-readmore
  let blogReadMore = document.createElement("a");
  const readMore = document.createTextNode("read more");
  blogReadMore.appendChild(readMore);
  blogReadMore.addEventListener('click', () =>
  fetchArticle(docs.id));

  image.setAttribute("class", "photo");
  blogCard.setAttribute("class", "blog-card");
  blogImage.setAttribute("class", "meta");
  blogDetails.setAttribute("class", "description");
  blogReadMore.setAttribute("class", "read-more a");

  blogImage.append(image);
  blogDetails.append(blogTitle);
  blogDetails.append(blogDesc);
  blogDetails.append(blogBody);
  blogDetails.append(blogReadMore);

  blogCard.append(blogDetails);
  blogCard.append(blogImage);
  blogSection.append(blogCard);
};

db.collection("blogs")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((docs) => {
      loadAllArticles(docs);
    });
  });
