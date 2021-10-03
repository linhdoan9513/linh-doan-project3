import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import firebaseApp from "./firebaseApp";

const createItem = (categoryName, itemName, value) => {
  const db = getDatabase(firebaseApp);
  set(ref(db, `user1/expense/${categoryName}/${itemName}`), value);
};

const deleteItem = (categoryName, itemName) => {
  const db = getDatabase(firebaseApp);
  remove(ref(db, `user1/expense/${categoryName}/${itemName}`), 0);
};

const getItem = (categoryName, itemName, callback) => {
  const db = getDatabase(firebaseApp);
  const ItemRef = ref(
    getDatabase(firebaseApp),
    `user1/expense/${categoryName}/${itemName}`
  );
  onValue(ItemRef, callback);
};

export { createItem, deleteItem, getItem };
