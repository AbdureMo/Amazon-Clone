import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgHwlowOL6za67YiseK3OHL78K4fvr0yU",
  authDomain: "abdures-amazo.firebaseapp.com",
  projectId: "abdures-amazo",
  storageBucket: "abdures-amazo.appspot.com",
  messagingSenderId: "222429779442",
  appId: "1:222429779442:web:a639fb7b6e862a8c51876b",
  measurementId: "G-XX5BMY313V",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

// export {auth}; 
export { db, auth }; 

