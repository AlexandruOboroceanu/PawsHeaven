// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgvsiCtrkRrzLWrlpl3y6L4_X9jPANigY",
  authDomain: "petapp-efa38.firebaseapp.com",
  projectId: "petapp-efa38",
  storageBucket: "petapp-efa38.firebasestorage.app",
  messagingSenderId: "372015566288",
  appId: "1:372015566288:web:1ff848ece8011b92007dd5",
  measurementId: "G-EGRQ61F5BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);