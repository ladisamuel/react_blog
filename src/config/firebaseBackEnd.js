// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoX7DS65dhxVStSDT0dJVEBBngsyPDG70",
  authDomain: "parachnoteapp.firebaseapp.com",
  projectId: "parachnoteapp",
  storageBucket: "parachnoteapp.appspot.com",
  messagingSenderId: "489374525361",
  appId: "1:489374525361:web:127de1962cf03198ff7f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);