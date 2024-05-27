// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa4s7Gw5Iq3AMWksxvwCrc-rPpxDX4in8",
  authDomain: "laptopselector-f9ce2.firebaseapp.com",
  projectId: "laptopselector-f9ce2",
  storageBucket: "laptopselector-f9ce2.appspot.com",
  messagingSenderId: "265263207247",
  appId: "1:265263207247:web:793c73a923a5068bb1ab3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;