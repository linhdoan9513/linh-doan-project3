// import DefaultSetting from "./DefaultSetting";
import { getAllCategories, addCategory } from "../../Models/CategoryModel";
import { useState, useEffect } from "react";
import UserCategory from "./UserCategory";

const DefaultCategory = () => {
  const defaultCategory = [
    "Groceries",
    "Utilities",
    "Shopping",
    "Dinning Out",
    "Cash",
    "Education",
    "Health",
    "Home",
    "Transportation",
  ];

  const [allCategories, setAllCategories] = useState([]);

  defaultCategory.forEach((category) => addCategory(category));

  const displayCategory = () => {
    getAllCategories((snapshot) => {
      const data = snapshot.val();
      setAllCategories(data);
    });
  };

  useEffect(() => {
    displayCategory();
  }, []);

  return (
    <>
      <UserCategory category={allCategories} />
    </>
  );
};

export default DefaultCategory;
