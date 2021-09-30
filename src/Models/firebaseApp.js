import { initializeApp } from "firebase/app";

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const config = {
  apiKey: "AIzaSyBJoArHm5ibvZ8hyW3vygJkt6ki7xbrhjA",
  authDomain: "budgettracker-db9c2.firebaseapp.com",
  databaseURL: "https://budgettracker-db9c2-default-rtdb.firebaseio.com",
  projectId: "budgettracker-db9c2",
  storageBucket: "budgettracker-db9c2.appspot.com",
  messagingSenderId: "239769975953",
  appId: "1:239769975953:web:13ccdbc54ecda581ec1330",
};

const firebaseApp = initializeApp(config);

export default firebaseApp;
