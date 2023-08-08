import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9YGxt9mKxScc2FIzQwepOCEw4aEJXfa0",
  authDomain: "todo-app-140b5.firebaseapp.com",
  projectId: "todo-app-140b5",
  storageBucket: "todo-app-140b5.appspot.com",
  messagingSenderId: "415222376402",
  appId: "1:415222376402:web:63cafe3da22dba92810a0b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
