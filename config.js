// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js'


// authentication
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail, 
    sendEmailVerification ,
    signOut,
    updatePassword,
    GoogleAuthProvider,
    signInWithPopup
 } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js'



// firestore
import { getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    collection,
     addDoc,
     onSnapshot,
     deleteDoc,
 } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYCikLRaBfKloeLSI5v1NAbR1OXIwTSC8",
    authDomain: "m-hackathon-b6074.firebaseapp.com",
    projectId: "m-hackathon-b6074",
    storageBucket: "m-hackathon-b6074.firebasestorage.app",
    messagingSenderId: "252497471761",
    appId: "1:252497471761:web:e400cce7e8a39554a244b0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)


export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail ,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    updatePassword,
    // firestore
    db,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    collection,
 addDoc,
 onSnapshot,
 deleteDoc,
}