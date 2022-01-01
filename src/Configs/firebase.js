import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByDhb9Om9nvFEQ7gQTCz_-6KMwAS_K3wE",
  authDomain: "clone-e5ac8.firebaseapp.com",
  projectId: "clone-e5ac8",
  storageBucket: "clone-e5ac8.appspot.com",
  messagingSenderId: "594174916480",
  appId: "1:594174916480:web:d1d1e125a1ac208aa23365",
  measurementId: "G-3MZK5QVLFQ",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage };
