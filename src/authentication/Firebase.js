// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeV4HqBkRy1QgrPWPBf6bIXiUgsnTNHtA",
  authDomain: "listed-auth-424b3.firebaseapp.com",
  projectId: "listed-auth-424b3",
  storageBucket: "listed-auth-424b3.appspot.com",
  messagingSenderId: "160841081894",
  appId: "1:160841081894:web:9e45601950e2a4d003f2e7",
  measurementId: "G-QQ6KSMLQJP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
