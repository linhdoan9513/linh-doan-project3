import { getDatabase, ref, onValue, set, update } from "firebase/database";
import firebaseApp from "./firebaseApp";

const createDate = (Date) => {
  const db = getDatabase(firebaseApp);
  set(ref(db, "expense/" + Date), 0);
};

// const getDate = (DateName, callback) => {
//   const db = getDatabase(firebaseApp);
//   const DateRef = ref(db, DateName);
//   onValue(DateRef, callback);
// };

export { createDate };
