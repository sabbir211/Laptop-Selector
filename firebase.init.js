// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLCZaLQbOOi2QlgOUncPR7ub9tOUq8Lzw",
  authDomain: "laptop-selector.firebaseapp.com",
  projectId: "laptop-selector",
  storageBucket: "laptop-selector.appspot.com",
  messagingSenderId: "39744629607",
  appId: "1:39744629607:web:50c687f7ba8eb03ac25dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;