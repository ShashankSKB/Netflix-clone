// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_uqctoIFRjD__PFoaHC2APF-zaXANXVY",
  authDomain: "netflix-gpt-dacfb.firebaseapp.com",
  projectId: "netflix-gpt-dacfb",
  storageBucket: "netflix-gpt-dacfb.appspot.com",
  messagingSenderId: "655912762385",
  appId: "1:655912762385:web:cdcddc1ede4e019ac185b0",
  measurementId: "G-VTQ390DGEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
