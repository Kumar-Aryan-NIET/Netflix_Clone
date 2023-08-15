import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhjzrYoKmtC0FGzjfINlo3ASo9ebsa390",
  authDomain: "react-netflix-clone-7dc8a.firebaseapp.com",
  projectId: "react-netflix-clone-7dc8a",
  storageBucket: "react-netflix-clone-7dc8a.appspot.com",
  messagingSenderId: "748166879035",
  appId: "1:748166879035:web:800842f405297ead76c91e",
  measurementId: "G-QF8VCVXBKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
