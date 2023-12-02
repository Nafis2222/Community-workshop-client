// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl9b0dXP0fX1SfaCe8OKUdbBk5upmC7Ls",
  authDomain: "tech-life-services.firebaseapp.com",
  projectId: "tech-life-services",
  storageBucket: "tech-life-services.appspot.com",
  messagingSenderId: "845272061150",
  appId: "1:845272061150:web:e357469c9ef017b6d65e4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app