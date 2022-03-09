// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNhRRq3iDxLPFOt01Zy-IKCEGiKAfRYrU",
  authDomain: "gateways-managment.firebaseapp.com",
  projectId: "gateways-managment",
  storageBucket: "gateways-managment.appspot.com",
  messagingSenderId: "739831649052",
  appId: "1:739831649052:web:f657c1559cf6e0fa09a0d9",
  measurementId: "G-T46V1Q283K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);