import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, getDocs, query, where, orderBy, serverTimestamp, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signInWithPopup, 
    GoogleAuthProvider, 
    GithubAuthProvider,
    signOut, 
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
    verifyBeforeUpdateEmail,
    updatePassword,
    linkWithPopup,
    unlink
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { 
    db, 
    auth, 
    googleProvider, 
    githubProvider,
    GoogleAuthProvider,
    GithubAuthProvider,
    doc, 
    getDoc, 
    setDoc, 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    where,
    orderBy, 
    serverTimestamp, 
    deleteDoc,
    updateDoc,
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut, 
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
    verifyBeforeUpdateEmail,
    updatePassword,
    linkWithPopup,
    unlink
};