import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebaseConfig from "./firebaseConfig";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}

          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          )}
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
