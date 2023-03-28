import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdhQregdVNIL6E15FdU5IIZxKpGdv2_6I",
  authDomain: "guiness-gurrus-9fe92.firebaseapp.com",
  projectId: "guiness-gurrus-9fe92",
  storageBucket: "guiness-gurrus-9fe92.appspot.com",
  messagingSenderId: "784798649129",
  appId: "1:784798649129:web:3f5eacbe2ff089508f4538",
  measurementId: "G-TV6SP7XXSM"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export{
    db,
    auth
}