// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-xH-eXAr6vrNjFIpHf2mQEfDCslW_LaU",
  authDomain: "netflixgpt2-8285d.firebaseapp.com",
  projectId: "netflixgpt2-8285d",
  storageBucket: "netflixgpt2-8285d.appspot.com",
  messagingSenderId: "337354886827",
  appId: "1:337354886827:web:877a619ec6ce524ef371ee",
  measurementId: "G-SHT01NT5B5"
};

// Initialize Firebase  

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth=getAuth();