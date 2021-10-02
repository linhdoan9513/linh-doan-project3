import { getDatabase, ref, onValue, update } from "firebase/database";
import firebaseApp from "./firebaseApp";

const addIncome = (IncomeName) => {
  const db = getDatabase(firebaseApp);
  const updates = {};
  updates["/income/" + IncomeName] = 0;
  return update(ref(db), updates);
};

const deleteIncome = (IncomeName) => {
  const db = getDatabase(firebaseApp);
  update(ref(db, IncomeName), null);
};

const getIncome = (IncomeName, callback) => {
  const db = getDatabase(firebaseApp);
  const IncomeRef = ref(db, IncomeName);
  onValue(IncomeRef, callback);
};

//updateIncomeName
//getIncome
//create new Income with new name
//delete old IncomeName

const getAllCategories = (callback) => {
  const db = getDatabase();
  const dbRef = ref(db, "income/");
  onValue(dbRef, callback);
};

export { addIncome, deleteIncome, getIncome };
