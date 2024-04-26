// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKiUCULEA1jIPur1XZK16GvoewRaDc8-Q",
  authDomain: "color-your-life-auth.firebaseapp.com",
  projectId: "color-your-life-auth",
  storageBucket: "color-your-life-auth.appspot.com",
  messagingSenderId: "736521332277",
  appId: "1:736521332277:web:6a70e8ca93cddf5e9a737c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
