import { useState, useEffect } from "react";
import { getData } from "../../Models/firebaseModel";

//Create a custom hook to get income for Firebase Database
const useGetIncome = (user) => {
  const [income, setIncome] = useState([]);
  const uid = user.uid;
  useEffect(() => {
    getData(`${uid}/income/`, (snapshot) => {
      const data = snapshot.val();
      //set condition to handle when data is not fully loaded
      if (data === undefined) {
        setIncome([]);
      } else {
        setIncome(data);
      }
    });
  }, [uid]);
  return income;
};

export default useGetIncome;
