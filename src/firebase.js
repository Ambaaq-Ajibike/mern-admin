import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyARbLxNwQA4rwDJUSJS11Im5_fWk21LCvc",
  authDomain: "gooutfilter.firebaseapp.com",
  projectId: "gooutfilter",
  storageBucket: "gooutfilter.appspot.com",
  messagingSenderId: "476106025222",
  appId: "1:476106025222:web:2921c3edd50f2e34d45687",
  measurementId: "G-KDJVZWDS27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);