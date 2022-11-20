import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDGsl_9rUJAlgBkf4Q3Lb5Wd3VdKS1R52c",
    authDomain: "schoolcrud-86762.firebaseapp.com",
    databaseURL: "https://schoolcrud-86762-default-rtdb.firebaseio.com",
    projectId: "schoolcrud-86762",
    storageBucket: "schoolcrud-86762.appspot.com",
    messagingSenderId: "955955665020",
    appId: "1:955955665020:web:85513d1c9b1eb7bb2a11f9",
    measurementId: "G-L53EX430HT"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getFirestore(app);

