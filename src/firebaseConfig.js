// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrcz5WqN_q--0Q5itLypUAqGeWa2pT5QQ",
  authDomain: "ecommercesyspc.firebaseapp.com",
  projectId: "ecommercesyspc",
  storageBucket: "ecommercesyspc.appspot.com",
  messagingSenderId: "1074630742765",
  appId: "1:1074630742765:web:afa74f798abd19487732e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

 export default db;