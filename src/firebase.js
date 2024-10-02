import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjCFdcoSnhbNEyg78xw6BuXpmOGiBjBGA",
    authDomain: "notify-475a7.firebaseapp.com",
    projectId: "notify-475a7",
    storageBucket: "notify-475a7.appspot.com",
    messagingSenderId: "188097250284",
    appId: "1:188097250284:web:485364ad8535ee9c7176c9"
};

const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();
export default db;