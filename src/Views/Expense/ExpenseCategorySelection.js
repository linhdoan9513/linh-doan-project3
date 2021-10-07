const ExpenseCategorySelection = ({
  onCategorySelection,
  defaultCategories,
}) => {
  return (
    <form className="expenseDropdown">
      <label htmlFor="category" className="sr-only">
        Select Category
      </label>
      <select
        defaultValue={"default"}
        onChange={onCategorySelection}
        type="select"
        name="category"
        className="category"
        id="category"
      >
        <option value="default" disabled>
          Choose a category
        </option>
        {defaultCategories.sort().map((eachCategory) => {
          return (
            <option value={eachCategory} key={eachCategory}>
              {eachCategory}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default ExpenseCategorySelection;
