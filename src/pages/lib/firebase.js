// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.APP_FIREBASE_KEY,
    authDomain: process.env.APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.APP_FIREBASE_PROJECTID,
    storageBucket: process.env.APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);