import { useState, useEffect } from "react";
import { getData } from "../../Models/firebaseModel";

const useGetExpense = () => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getData("expense/", (snapshot) => {
      const data = snapshot.val();
      setExpense(data);
    });
  }, []);
  return expense;
};

export default useGetExpense;
