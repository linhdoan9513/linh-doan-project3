import { getDatabase, ref, onValue, remove, push } from "firebase/database";
import firebaseApp from "./firebaseApp";

const addData = (parentNode, categoryName) => {
  const db = getDatabase(firebaseApp);
  push(ref(db, parentNode), categoryName);
};

const deleteData = (parentNode, categoryName) => {
  const db = getDatabase(firebaseApp);
  return remove(ref(db, parentNode + categoryName));
};

const getData = (parentNode, callback) => {
  const db = getDatabase();
  onValue(ref(db, parentNode), callback);
};

const getUserCategories = (callback) => {
  const db = getDatabase();
  const dbRef = ref(db, "user1/expense/");
  onValue(dbRef, callback);
};

// this exports the CONFIGURED version of firebase
export { deleteData, getData, addData, getUserCategories };
