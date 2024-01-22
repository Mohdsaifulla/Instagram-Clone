import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbd9bAVGru1PJvaP8AIppfs8gS800-XUc",
  authDomain: "instagram-clone-bfc11.firebaseapp.com",
  projectId: "instagram-clone-bfc11",
  storageBucket: "instagram-clone-bfc11.appspot.com",
  messagingSenderId: "267999944163",
  appId: "1:267999944163:web:ee84c6682129cb655514d6",
  measurementId: "G-74D2498TYY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, firestore, storage };
