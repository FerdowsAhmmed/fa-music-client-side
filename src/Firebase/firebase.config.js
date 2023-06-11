// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGwpbl1Mq5jAYIMWZrc5kx0qQdZC_NllQ",
  authDomain: "fa-music-center.firebaseapp.com",
  projectId: "fa-music-center",
  storageBucket: "fa-music-center.appspot.com",
  messagingSenderId: "925227280352",
  appId: "1:925227280352:web:880cca8eea3934ecabed85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  app;