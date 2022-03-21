// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

import { doc, onSnapshot, getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

import {
  getStorage,
  connectStorageEmulator,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCNhRRq3iDxLPFOt01Zy-IKCEGiKAfRYrU',
  authDomain: 'gateways-managment.firebaseapp.com',
  projectId: 'gateways-managment',
  storageBucket: 'gateways-managment.appspot.com',
  messagingSenderId: '739831649052',
  appId: '1:739831649052:web:f657c1559cf6e0fa09a0d9',
  measurementId: 'G-T46V1Q283K'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const functions = getFunctions(app, 'us-central1');
connectFunctionsEmulator(functions, 'localhost', 5001);

const auth = getAuth();
connectAuthEmulator(auth, 'http://localhost:9099');

const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8082);

const storage = getStorage();
connectStorageEmulator(storage, 'localhost', 9199);

// Google Sign In
const provider = new GoogleAuthProvider();

export {
  functions,
  httpsCallable,
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  provider,
  signInWithPopup,
  db,
  doc,
  onSnapshot,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
};
