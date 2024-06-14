// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz6Yy3VyOzRhEPaDk0xRJwg2SSOG71qA8",
  authDomain: "krunalprajapati-88740.firebaseapp.com",
  databaseURL: "https://krunalprajapati-88740-default-rtdb.firebaseio.com",
  projectId: "krunalprajapati-88740",
  storageBucket: "krunalprajapati-88740.appspot.com",
  messagingSenderId: "698475755331",
  appId: "1:698475755331:web:da5f9c41da157fd38be1f6",
  measurementId: "G-7WS7CK9SKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, signInWithPopup };
