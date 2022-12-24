import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCklvs5eG3-BehX7dN_ekmrNNSo86hH3Lg",
  authDomain: "signal-clone-bf75e.firebaseapp.com",
  projectId: "signal-clone-bf75e",
  storageBucket: "signal-clone-bf75e.appspot.com",
  messagingSenderId: "423542260401",
  appId: "1:423542260401:web:16ce8bf5cc9e354a531890",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
