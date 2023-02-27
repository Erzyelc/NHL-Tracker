// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCURmn43pMamXvJ6l6jvJlfKYhSx2bIfps",
  authDomain: "nhl-tracker.firebaseapp.com",
  projectId: "nhl-tracker",
  storageBucket: "nhl-tracker.appspot.com",
  messagingSenderId: "743590792442",
  appId: "1:743590792442:web:3b8569f9068bf59080cd43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)