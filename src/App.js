import { useState, useEffect } from "react";
import Login from "./Login";
import firebase from "./firebase";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  console.log(user);
  return (
    <div className="App">
      <h1>Budget Tracker</h1>
    </div>
  );
}

export default App;
