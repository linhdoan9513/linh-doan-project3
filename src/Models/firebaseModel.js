import { getDatabase, ref, onValue, remove, push } from "firebase/database";
import firebaseApp from "./firebaseApp";

//ParentNode is the directory to the top parent layer in the firebase database, in this project is "expense/", "form/"

//Create function to add data to Firebase database;
const addData = (parentNode, categoryName) => {
  const db = getDatabase(firebaseApp);
  push(ref(db, parentNode), categoryName);
};

//Create function to delete data to Firebase database;
const deleteData = (parentNode, categoryName) => {
  const db = getDatabase(firebaseApp);
  return remove(ref(db, parentNode + categoryName));
};

//Create function to get data to Firebase database;
const getData = (parentNode, callback) => {
  const db = getDatabase();
  onValue(ref(db, parentNode), callback);
};

export { deleteData, getData, addData };
