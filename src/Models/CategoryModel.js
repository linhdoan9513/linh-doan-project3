import { getDatabase, ref, onValue, set, update } from "firebase/database";
import firebaseApp from "./firebaseApp";

// const createCategory = (categoryName) => {
//   const db = getDatabase(firebaseApp);
//   set(ref(db, "expense/" + categoryName), 0);
// };

const addCategory = (categoryName) => {
  const db = getDatabase(firebaseApp);
  const updates = {};
  updates["/expense/" + categoryName] = 0;
  return update(ref(db), updates);
};

const deleteCategory = (categoryName) => {
  const db = getDatabase(firebaseApp);
  update(ref(db, categoryName), null);
};

const getCategory = (categoryName, callback) => {
  const db = getDatabase(firebaseApp);
  const categoryRef = ref(db, categoryName);
  onValue(categoryRef, callback);
};

//updateCategoryName
//getCategory
//create new Category with new name
//delete old CategoryName

const getAllCategories = (callback) => {
  const db = getDatabase();
  const dbRef = ref(db, "expense/");
  onValue(dbRef, callback);
};

// this exports the CONFIGURED version of firebase
export {
  createCategory,
  deleteCategory,
  getCategory,
  getAllCategories,
  addCategory,
};
