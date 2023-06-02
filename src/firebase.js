import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBraCts7W1gkT1YsSSaPFRBfdiWGunu7kQ",
  authDomain: "chat-cf088.firebaseapp.com",
  projectId: "chat-cf088",
  storageBucket: "chat-cf088.appspot.com",
  messagingSenderId: "377974826287",
  appId: "1:377974826287:web:de66fe6bad6d28b646edda",
  measurementId: "G-5PVF6L68PY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
