import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
// import "firebase/database";

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

const app = initializeApp(config);

// const budget = {
//   category1: {
//     burger: {
//       price: 20,
//     },
//   },
// };

const category = ["item1", "item2", "retirement"];

function writeItems(name, value) {
  const db = getDatabase(app);
  set(ref(db, "items/" + name), value);
}

writeItems("item1", 10);

const itemsRef = ref(getDatabase(app), "/items");
onValue(itemsRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

// this exports the CONFIGURED version of firebase
export default firebase;
