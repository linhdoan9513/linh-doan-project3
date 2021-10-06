import {
  getDatabase,
  ref,
  onValue,
  remove,
  push,
  set,
} from "firebase/database";
import firebaseApp from "./firebaseApp";

//ParentNode is the directory to the top parent layer in the firebase database, in this project is "expense/", "form/"

//Create function to add data to Firebase database;
const addData = (parentNode, categoryName) => {
  const db = getDatabase(firebaseApp);
  push(ref(db, parentNode), categoryName);
};

//Create topData function to handle error. According to firebase documentation, firebase doesnt store top layer data as null, it will automatically deletes the top key, so the code add value 0 in to handle when there is no children under parent node; so the database still have the parent key and data as 0;

const addTopData = (parentNode) => {
  const db = getDatabase(firebaseApp);
  set(ref(db, parentNode), 0);
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

export { deleteData, getData, addData, addTopData };
