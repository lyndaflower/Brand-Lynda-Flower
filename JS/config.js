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

export const db = firebase.firestore();
export const storage = firebase.storage();