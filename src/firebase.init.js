// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA0PuiSer5ePOG0T4YDl_EhGK6nrNuicw",
  authDomain: "assignment-10-495ba.firebaseapp.com",
  projectId: "assignment-10-495ba",
  storageBucket: "assignment-10-495ba.appspot.com",
  messagingSenderId: "918620243573",
  appId: "1:918620243573:web:a251d531551de7034bda3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;