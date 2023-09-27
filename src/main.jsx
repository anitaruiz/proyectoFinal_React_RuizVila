import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmSx3GbJC2fNeuB7OClDmIsVOhBITIHsY",
  authDomain: "lupita-coderhouse.firebaseapp.com",
  projectId: "lupita-coderhouse",
  storageBucket: "lupita-coderhouse.appspot.com",
  messagingSenderId: "799630796242",
  appId: "1:799630796242:web:7d2f775958b9839fefd40b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);