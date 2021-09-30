import { createCategory, getAllCategories } from "../Models/CategoryModel";

const Category = () => {
  getAllCategories();
  createCategory("utility");

  return <h1>Hello</h1>;
};

export default Category;
