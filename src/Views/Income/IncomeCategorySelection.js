const IncomeCategorySelection = ({ onCategorySelection, defaultIncome }) => {
  return (
    <form className="dropdown">
      <select
        defaultValue={"default"}
        onChange={onCategorySelection}
        type="select"
        name="category"
        id="category"
      >
        <option value="default" disabled>
          Choose a category
        </option>
        {defaultIncome.sort().map((eachIncome) => {
          return (
            <option value={eachIncome} key={eachIncome}>
              {eachIncome}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default IncomeCategorySelection;
