import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the auth module
import { getStorage } from "firebase/storage"; // Import the storage module

// Your web app's Firebase configuration (same as you provided in your question)
const firebaseConfig = {
  apiKey: "AIzaSyA-7pcz2Q3WzYIPmhMU0AODw1Alj2rIsb4",
  authDomain: "rajesh-a9b6c.firebaseapp.com",
  projectId: "rajesh-a9b6c",
  storageBucket: "rajesh-a9b6c.appspot.com",
  messagingSenderId: "98139337932",
  appId: "1:98139337932:web:74f4c73f41b77da8c5be69",
  measurementId: "G-KM7FBCD16W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get the auth and storage instances
const auth = getAuth();
const storage = getStorage();

export { auth, storage };