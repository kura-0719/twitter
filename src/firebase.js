import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgXR7d6YiPvd5l5gKfr0kF2zNnXJvHFRI",
  authDomain: "twitter-76058.firebaseapp.com",
  projectId: "twitter-76058",
  storageBucket: "twitter-76058.appspot.com",
  messagingSenderId: "623859019348",
  appId: "1:623859019348:web:95316cab48674871b807c1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
