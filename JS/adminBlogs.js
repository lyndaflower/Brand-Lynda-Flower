import { db } from "./config.js";
// import {storage} from "./config";

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.replace("../pages/signin.html");
  }
});
const singleArticleId = localStorage.getItem("article-id");
const renderArticle = (doc) => {
  var blogSection = document.querySelector("#blog-section");

  // blog-card
  let blogCard = document.createElement("div");
  let blogDetails = document.createElement("div");
  let blogDesc = document.createElement("h2");
  blogDesc.innerHTML = doc.data().description;
  let blogBody = document.createElement("p");
  blogBody.innerHTML = `${doc.data().body.slice(0, 150)}...  `;

  // blog-cover-image
  let image = document.createElement("img");
  let blogImage = document.createElement("div");
  image.src = doc.data().url;

  // blog title
  let blogTitle = document.createElement("h1");
  blogTitle.innerHTML = doc.data().title;

  let deleteIcon = document.createElement("div");
  deleteIcon.innerHTML = `
  <div class="icons">
  <i class="fas fa-trash fa-3x" id="delete"></i>
  </div>
 `;

  deleteIcon.addEventListener("click", () => {
    document.getElementById("blog-section").style.display = "none";
    document.getElementById("id01").style.display = "block";

    const modal = () => {
      document.getElementById("id01").style.display = "none";
    };
    document.getElementById("modal").addEventListener("click", modal);
    document.getElementById("deleteArticle").addEventListener("click", () => {
      // console.log(doc.id);
      db.collection("blogs")
        .doc(doc.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
          setTimeout(function () {
            window.location.replace("../pages/adminBlogs.html");
          }, 3000);
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    });
    document.getElementById("cancel").addEventListener("click", () => {
      window.location.replace("../pages/adminBlogs.html");
    });
  });

  let edit = document.createElement("div");
  edit.innerHTML = `<div class="icons">
<i class="fas fa-edit fa-3x" id="edit"></i>
</div>`;
  edit.addEventListener("click", () => {
    localStorage.setItem("edit-article", doc.id);
    window.location.assign("../pages/editing-article.html");
  });

  image.setAttribute("class", "photo");
  blogCard.setAttribute("class", "blog-card");
  blogImage.setAttribute("class", "meta");
  blogDetails.setAttribute("class", "description");
  // blogReadMore.setAttribute("class", "read-more a");

  blogImage.append(image);
  blogDetails.append(blogTitle);
  blogDetails.append(blogDesc);
  blogDetails.append(blogBody);
  blogDetails.append(edit);
  blogDetails.append(deleteIcon);

  blogCard.append(blogDetails);
  blogCard.append(blogImage);
  blogSection.append(blogCard);
};

db.collection("blogs")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderArticle(doc);
    });
  });

const logout = () => {
  firebase.auth().signOut();
  window.location.assign("../pages/signin.html");
};
document.getElementById("logout").addEventListener("click", logout);
