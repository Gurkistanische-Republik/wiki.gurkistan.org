import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, getDocs, query, orderBy, serverTimestamp, deleteDoc } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBjFo-_ESLBveBnAy1Iq-dG2OOVWgyLBlA",
    authDomain: "gurkipedia-new.firebaseapp.com",
    projectId: "gurkipedia-new",
    storageBucket: "gurkipedia-new.firebasestorage.app",
    messagingSenderId: "666415108539",
    appId: "1:666415108539:web:189239392aa21479acb49e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, getDoc, setDoc, collection, addDoc, getDocs, query, orderBy, serverTimestamp, deleteDoc };