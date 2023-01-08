import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ setCategories, setParams, category }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    return setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setParams({
        q: [inputValue, ...category],
      });
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full my-2 px-2 rounded-md"
        placeholder="Add category"
        onChange={handleInputValue}
        value={inputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
