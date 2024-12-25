// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi1WDLpf0mjhbC3XCnbg-R2z4VVL6aKUM",
  authDomain: "aitripplanner-d1070.firebaseapp.com",
  projectId: "aitripplanner-d1070",
  storageBucket: "aitripplanner-d1070.firebasestorage.app",
  messagingSenderId: "837442578524",
  appId: "1:837442578524:web:42216296a35075e9261e99",
  measurementId: "G-2JYG06WZ2L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app); 
// const analytics = getAnalytics(app);