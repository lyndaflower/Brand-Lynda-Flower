var firebaseConfig = {
  apiKey: "AIzaSyDsZzR0HFcDDtdVEK-SvkVbcOpC8HjJ0yQ",
  authDomain: "personal-website-4f106.firebaseapp.com",
  databaseURL: "https://personal-website-4f106.firebaseio.com",
  projectId: "personal-website-4f106",
  storageBucket: "personal-website-4f106.appspot.com",
  messagingSenderId: "374502379076",
  appId: "1:374502379076:web:2bbbd4096010aef7d37611",
  measurementId: "G-XL6FTWZPBP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();
db.settings({});
db.collection('blogs').get().then((snapshot) =>{
snapshot.docs.forEach(docs => {
  console.log(docs.data());
});
})
  
  // const dbRef = firebase.database().ref();
  // const blogsRef = dbRef.child("blogs");
  

// const loadAllArticles = () => {
//     const blogsRef = firebase.database().ref("blogs");
//     var blogSection = document.querySelector("#blog-section");
//     blogsRef.on("child_added", (snap) => {

//       // blog-card
//       let blogCard = document.createElement("div");
//       let blogDetails = document.createElement("div");
//       let blogDesc = document.createElement("h2");
//       blogDesc.innerHTML = snap.val().description;
//       let blogBody = document.createElement("p");
//       blogBody.innerHTML = snap.val().body;

//         // blog-cover-image
//       let blogImage = document.createElement("div");
//       let image = document.createElement('img');
//       image.src = snap.val().image;

//       // const theImage="<img src='" + snap.val().image +"/>";
//       //  if(snap.val.image) blogImage.innerHTML += theImage;

//       // blog title
//       let blogTitle = document.createElement("h1");
//       blogTitle.innerHTML = snap.val().title;

//       // blog-readmore
//       let blogReadMore = document.createElement("a");
//       blogReadMore.setAttribute("href", "./article-list.html");
//       const readMore = document.createTextNode("read more");
//       blogReadMore.appendChild(readMore);
//       blogReadMore.addEventListener('click', ()=>{
//         localStorage.setItem('dataKey', snap.key);
//       });

//       image.setAttribute('class', 'photo');
//       blogCard.setAttribute('class', 'blog-card');
//       blogImage.setAttribute('class','meta');
//       blogDetails.setAttribute('class','description');
//       blogReadMore.setAttribute('class','read-more a');

//       blogImage.append(image);
//       blogDetails.append(blogTitle);
//       blogDetails.append(blogDesc);
//       blogDetails.append(blogBody);
//       blogDetails.append(blogReadMore);
  
  
//       blogCard.append(blogDetails);
//       blogCard.append(blogImage);
//       blogSection.append(blogCard);
//     });
//   };