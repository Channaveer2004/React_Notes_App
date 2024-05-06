import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBb2WPWKknWxSnapulGKU2TMtSzuDFSx20",
  authDomain: "react-notes-app-30bb4.firebaseapp.com",
  projectId: "react-notes-app-30bb4",
  storageBucket: "react-notes-app-30bb4.appspot.com",
  messagingSenderId: "754136621527",
  appId: "1:754136621527:web:6e22b83bcd2eaaf2b4ab92"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")