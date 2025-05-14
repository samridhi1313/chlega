import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBGYrODt5qKInPfZb7aaPVetgLpiWl_hqE",
  authDomain: "lesgo-627a9.firebaseapp.com",
  projectId: "lesgo-627a9",
  storageBucket: "lesgo-627a9.firebasestorage.app",
  messagingSenderId: "250877261552",
  appId: "1:250877261552:web:872e6ba588f2d2efe0b435",
  measurementId: "G-4G69ENKQ00"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// 🔁 Export messaging + getToken so you can use them in App.js
export { messaging, getToken };
