import { getDatabase, ref, onValue, remove, push } from "firebase/database";
import firebaseApp from "./firebaseApp";

// const createCategory = (categoryName) => {
//   const db = getDatabase(firebaseApp);
//   set(ref(db, "expense/" + categoryName), 0);
// };

// const addCategory = (categoryName) => {
//   const db = getDatabase(firebaseApp);
//   const updates = {};
//   updates["default_user/expense/" + categoryName] = 0;
//   return update(ref(db), updates);
// };

const addFunction = (parentNode, categoryName) => {
  const db = getDatabase(firebaseApp);

  // const updates = {};
  // updates["user1/expense/" + categoryName] = 0;
  // return update(ref(db), updates);
  push(ref(db, parentNode), categoryName);
};

const deleteCategory = (categoryName) => {
  const db = getDatabase(firebaseApp);
  return remove(ref(db, "user1/expense/" + categoryName));
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
  onValue(ref(db, "expense/"), callback);
};

const getUserCategories = (callback) => {
  const db = getDatabase();
  const dbRef = ref(db, "user1/expense/");
  onValue(dbRef, callback);
};

// this exports the CONFIGURED version of firebase
export {
  deleteCategory,
  getCategory,
  getAllCategories,
  addFunction,
  getUserCategories,
};
