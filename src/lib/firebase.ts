
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_FIREBASE_API,
  authDomain: import.meta.env.VITE_REACT_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export { app };