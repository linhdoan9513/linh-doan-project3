import { useState, useEffect } from "react";
import { getData } from "../../Models/firebaseModel";

//Create a custom hook to get expense for Firebase Database
const useGetExpense = (user) => {
  const [expense, setExpense] = useState([]);
  const uid = user.uid;
  useEffect(() => {
    getData(`${uid}/expense/`, (snapshot) => {
      const data = snapshot.val();
      //set condition to handle when data is not fully loaded
      if (data === undefined) {
        setExpense([]);
      } else {
        setExpense(data);
      }
    });
  }, [uid]);
  return expense;
};

export default useGetExpense;
