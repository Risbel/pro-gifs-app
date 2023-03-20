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
      setCategories((prevCats) => [inputValue, ...prevCats]);
      setParams({
        q: [...category, inputValue],
      });
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex my-4 items-center">
      <input
        className="pl-2 pr-8 rounded-md"
        placeholder="Add category"
        onChange={handleInputValue}
        value={inputValue}
      />
      <button className="" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute -translate-x-7 -translate-y-3 w-6 h-6 hover:h-7 hover:w-7 hover:stroke-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
