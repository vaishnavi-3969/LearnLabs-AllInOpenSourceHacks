import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "learnlabs-2cc32.firebaseapp.com",
  projectId: "learnlabs-2cc32",
  storageBucket: "learnlabs-2cc32.appspot.com",
  messagingSenderId: "39191254055",
  appId: "1:39191254055:web:a79cf911d2303d7cc7ea02",
  measurementId: "G-CQKM20F04M"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore = getFirestore(app);

export {
    app,
    database,
    firestore
}