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
  
      let blogCard = document.createElement("div");
      let blogImage = document.createElement("div");
      let image = document.createElement('img');
      let blogDetails = document.createElement("div");
      let blogTitle = document.createElement("h1");
      let blogReadMore = document.createElement("p");

      blogTitle.innerHTML = snap.val().title;
      let blogDesc = document.createElement("h2");
      blogDesc.innerHTML = snap.val().description;
      let blogBody = document.createElement("p");
      blogBody.innerHTML = snap.val().body;
      blogReadMore.innerHTML = `<a href="single-blog.html">Read More<i class="fas fa-arrow-right"></i></a>`
    
      image.src = snap.val().image;

      image.setAttribute('class', 'photo');
      blogCard.setAttribute('class', 'blog-card');
      blogImage.setAttribute('class','meta');
      blogDetails.setAttribute('class','description');
      blogReadMore.setAttribute('class','read-more');

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