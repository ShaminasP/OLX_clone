import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDci7Me7vjVEPFZzwGKf7B6OnHEYmXT89Y",
    authDomain: "olx-clone-68a2b.firebaseapp.com",
    projectId: "olx-clone-68a2b",
    storageBucket: "olx-clone-68a2b.appspot.com",
    messagingSenderId: "448134131382",
    appId: "1:448134131382:web:de25dba6cbcc2c28a90017",
    measurementId: "G-2LPR9FESBL"
  };

 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app)
