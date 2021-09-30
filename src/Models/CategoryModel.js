import { getDatabase, ref, onValue, set, update } from "firebase/database";
import firebaseApp from "./firebaseApp";

const createCategory = (categoryName) => {
  const db = getDatabase(firebaseApp);
  set(ref(db, "data/" + categoryName), 0);
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

const getAllCategories = () => {
  const db = getDatabase();
  const categoryRef = ref(db, "data/");
  onValue(categoryRef, (snapshot) => {
    const data = snapshot.val();
  });
};

// this exports the CONFIGURED version of firebase
export { createCategory, deleteCategory, getCategory, getAllCategories };
