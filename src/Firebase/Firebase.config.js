// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn0nJxsHFyJrC6u4fffZdnSYahItzlE4k",
  authDomain: "talk-expo.firebaseapp.com",
  projectId: "talk-expo",
  storageBucket: "talk-expo.appspot.com",
  messagingSenderId: "471546413954",
  appId: "1:471546413954:web:c757cd00bd744fcc05459b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;