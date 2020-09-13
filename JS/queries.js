import { db } from "./config.js";

const userQuieries = document.querySelector("#btn-send");

const addUserComment = () => {
  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let comment = document.getElementById("comment").value;
  db.collection("queries")
    .add({
      name: name,
      email: email,
      subject: subject,
      comment: comment,
    })
    .then(function () {
      console.log("Doc successful");
    })
    .catch(function (error) {
      console.error("Error writing doc", error);
    });
};
userQuieries.addEventListener("click", addUserComment);
