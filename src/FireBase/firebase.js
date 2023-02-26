// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';
import firebase from 'firebase/compat/app';


const firebaseConfig = {
  apiKey: "AIzaSyCDaDwOSSi6wYkmGDPJUvH56Mtvx2i36rw",
  authDomain: "myrec-d3f07.firebaseapp.com",
  projectId: "myrec-d3f07",
  storageBucket: "myrec-d3f07.appspot.com",
  messagingSenderId: "569322501407",
  appId: "1:569322501407:web:22705ab64e9390d6d96c2a"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = getAuth();
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const provider= new GoogleAuthProvider();
export { auth, db , provider , storage};
