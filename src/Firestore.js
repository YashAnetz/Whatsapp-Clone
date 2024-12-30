// Firestore.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFpHZl0tdYxfdpicAtiTM2X4HvyoxD1iU",
  authDomain: "whatsapp-clone-fb6e9.firebaseapp.com",
  projectId: "whatsapp-clone-fb6e9",
  storageBucket: "whatsapp-clone-fb6e9.firebasestorage.app",
  messagingSenderId: "1091022412739",
  appId: "1:1091022412739:web:df992e76106669862abb76",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
