const firebaseConfig = {
    apiKey: "AIzaSyAG6etKCA1boqukqISl8uJYsc3hqXKANUQ",
    authDomain: "my-brand-lynda.firebaseapp.com",
    databaseURL: "https://my-brand-lynda.firebaseio.com",
    projectId: "my-brand-lynda",
    storageBucket: "my-brand-lynda.appspot.com",
    messagingSenderId: "1061558652166",
    appId: "1:1061558652166:web:8e422f69045c82839a2287",
    measurementId: "G-QB0ZDPQCTH",
  };
  firebase.initializeApp(firebaseConfig);
  
  const dbRef = firebase.database().ref();
  const blogsRef = dbRef.child("blogs");
  
 

const loadAllArticles = () => {
    const blogsRef = firebase.database().ref("blogs");
    var blogSection = document.querySelector("#blog-section");
    blogsRef.on("child_added", (snap) => {
      console.log(snap.key);

      const setCurrentArticle = (id) => {
        localStorage.setItem("current-article-id", id);
      };
  
      // blog-card
      let blogCard = document.createElement("div");
      let blogDetails = document.createElement("div");
      let blogDesc = document.createElement("h2");
      blogDesc.innerHTML = snap.val().description;
      let blogBody = document.createElement("p");
      blogBody.innerHTML = snap.val().body;
     
       //  blog-cover-image
      let blogImage = document.createElement("div");
      let image = document.createElement('img');
      image.src = snap.val().image;
       
      // blog title
      let blogTitle = document.createElement("h1");
      blogTitle.innerHTML = snap.val().title;

      // blog-readmore
      let blogReadMore = document.createElement("a");
      blogReadMore.setAttribute("href", "./article-list.html");
      const readMore = document.createTextNode("read more");
      blogReadMore.appendChild(readMore);

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
      blogSection.append(blogCard);
    });
  };