import './App.css';
import firebase from 'firebase/App';
import 'firebase/auth'

import { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBCuNSDbfZUhc41wCsJyk2-Qs0LQt1n_4",
  authDomain: "quest-terminal-2.firebaseapp.com",
  projectId: "quest-terminal-2",
  storageBucket: "quest-terminal-2.appspot.com",
  messagingSenderId: "152872851662",
  appId: "1:152872851662:web:00e07c63d72c44b403d89f"
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
function App() {
}

export default App;
