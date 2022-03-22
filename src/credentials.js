// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDJMD0kjetj_P_zP4oO07scF6Mpthz9PMk",
   authDomain: "react-shop-23ea8.firebaseapp.com",
   projectId: "react-shop-23ea8",
   storageBucket: "react-shop-23ea8.appspot.com",
   messagingSenderId: "152409936412",
   appId: "1:152409936412:web:bbb875339932b5e2b285d9"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;