// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJoArHm5ibvZ8hyW3vygJkt6ki7xbrhjA",
  authDomain: "budgettracker-db9c2.firebaseapp.com",
  databaseURL: "https://budgettracker-db9c2-default-rtdb.firebaseio.com",
  projectId: "budgettracker-db9c2",
  storageBucket: "budgettracker-db9c2.appspot.com",
  messagingSenderId: "239769975953",
  appId: "1:239769975953:web:13ccdbc54ecda581ec1330",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
