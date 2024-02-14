// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt5tUHxiM7OX1JxfxJvdGraOtXL9ZTOMo",
  authDomain: "nissantriviaipcrime.firebaseapp.com",
  projectId: "nissantriviaipcrime",
  storageBucket: "nissantriviaipcrime.appspot.com",
  messagingSenderId: "908376244861",
  appId: "1:908376244861:web:b08b09c3be64be06a7a714",
  measurementId: "G-8DN5CM7H19"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);

