import { useState } from "react";
// import DisplayCategory from "./DisplayUserCategory";
import Item from "../Item/Item";

const Category = (props) => {
  const [value, setValue] = useState("default");
  // const [userCategories, setUserCategories] = useState([]);
  const defaultCategory = [
    "Groceries",
    "Utilities",
    "Shopping",
    "Dinning Out",
    "Cash",
    "Education",
    "Health",
    "House Hold",
    "Transportation",
  ];

  // const [displayInput, setDisplayInput] = useState(false);

  // const displayUserCategories = () => {
  //   getUserCategories((snapshot) => {
  //     const data = snapshot.val();
  //     console.log(`data is ` + data);
  //     setUserCategories(data);
  //   });
  // };

  // useEffect(() => {
  //   displayUserCategories();
  // }, []);

  return (
    <section className="category">
      {/* <button onClick={() => setDisplayInput(!displayInput)}>+</button>
      {displayInput ? <AddUserCategory /> : null} */}
      {/* <DisplayCategory category={defaultCategory} /> */}
      <form>
        <label htmlFor="category" className="sr-only">
          Select Category
        </label>
        <select
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          type="select"
          name="category"
          id="category"
        >
          <option value="default" disabled>
            Choose a category
          </option>
          {defaultCategory.sort().map((eachCategory) => {
            return (
              <option value={eachCategory} key={eachCategory}>
                {eachCategory}
              </option>
            );
          })}
        </select>
      </form>
      <Item categoryChoice={value} allCategories={defaultCategory.sort()} />
    </section>
  );
};

export default Category;
