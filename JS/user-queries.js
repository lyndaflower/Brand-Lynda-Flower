import { db } from "./config.js";

const displayUserQueries = () => {
  db.collection("queries")
    .get()
    .then((doc) => {
      // console.log(doc.docs[0].data());
      doc.docs.map((doc) => {
        //  console.log(doc.data());
        const messageQueries = document.querySelector(".user-queries");
        const userQueries = document.createElement("div");
        userQueries.innerHTML = `
        <div class="comm">
        <img src="https://img.pngio.com/person-individually-alone-icon-png-image-font-awesome-user-svg-person-icon-png-920_998.png">
        <div class="comment__details">
            <div class="name"><h2>${doc.data().name} <br><span class="email">${
          doc.data().email
        }</span></h2></div>
            <div><p></p></div>
            <div class="subject"><p>${
              doc.data().subject
            } <br><span class="comment">${doc.data().comment}</span></p></div>
                </div>
                </div>`;

        messageQueries.append(userQueries);
      });
    });
};
window.addEventListener("load", displayUserQueries);

const logout = () => {
  firebase.auth().signOut();
  window.location.assign("../pages/signin.html");
};
document.getElementById("logout").addEventListener("click", logout);
