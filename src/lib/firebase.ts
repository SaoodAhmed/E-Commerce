// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHwicE11BPE2pfRNqT5P4k1YlgPOXg0lg",
  authDomain: "e-commerce-7a505.firebaseapp.com",
  projectId: "e-commerce-7a505",
  storageBucket: "e-commerce-7a505.appspot.com",
  messagingSenderId: "797403553861",
  appId: "1:797403553861:web:031e803fe29f606949432c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();