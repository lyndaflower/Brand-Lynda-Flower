import {db} from "./config.js";
// import {storage} from "./config";
  
db.collection('blogs').get().then((snapshot) =>{
  blogsRef.on("child_added", (snap)
  snapshot.docs.forEach(docs => {
    
      // blog-card
      let blogCard = document.createElement("div");
      let blogDetails = document.createElement("div");
      let blogDesc = document.createElement("h2");
      blogDesc.innerHTML = docs.data().description;
      let blogBody = document.createElement("p");
      blogBody.innerHTML = docs.data().body;

        // blog-cover-image
      let blogImage = document.createElement("div");
      let image = document.createElement('img');
      image.src = docs.data().image;

      // const theImage="<img src='" + snap.val().image +"/>";
      //  if(snap.val.image) blogImage.innerHTML += theImage;

      // blog title
      let blogTitle = document.createElement("h1");
      blogTitle.innerHTML = docs.data().title;

      // blog-readmore
      let blogReadMore = document.createElement("a");
      blogReadMore.setAttribute("href", "./article-list.html");
      const readMore = document.createTextNode("read more");
      blogReadMore.appendChild(readMore);
      blogReadMore.addEventListener('click', ()=>{
        localStorage.setItem('dataKey', snap.key);
      });

      image.setAttribute('class', 'photo');
      blogCard.setAttribute('class', 'blog-card');
      blogImage.setAttribute('class','meta');
      blogDetails.setAttribute('class','description');
      blogReadMore.setAttribute('class','read-more a');

      blogImage.append(image);
      blogDetails.append(blogTitle);
      blogDetails.append(blogDesc);
      blogDetails.append(blogBody);
      blogDetails.append(blogReadMore);
  
  
      blogCard.append(blogDetails);
      blogCard.append(blogImage);
      blogCard.append(blogCard);
    });
  })

// const loadAllArticles = () => {
//     var blogSection = document.querySelector("#blog-section");
//     blogsRef.on("child_added", (snap) => {

//   };