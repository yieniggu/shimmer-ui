// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5RZUE8VyQVygIRZkZ8utOpIo4Nsov5NE",
  authDomain: "shimmer-86487.firebaseapp.com",
  projectId: "shimmer-86487",
  storageBucket: "shimmer-86487.appspot.com",
  messagingSenderId: "4418712334",
  appId: "1:4418712334:web:6c48dc927ca7ff2c1edd5f",
  measurementId: "G-ELQ0PPPEYY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
