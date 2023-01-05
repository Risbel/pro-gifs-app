import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [category, setCategories] = useState([]);

  const handleReset = () => {
    return setCategories([]);
  };

  const handleDeletLastCat = () => {
    const Last = category.length - 1;

    return setCategories(category.splice(0, Last));
  };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <br />
      <button
        className="px-2 mt-2 rounded-md bg-gray-300"
        onClick={handleReset}
      >
        Reset
      </button>
      <br />
      <button
        className="px-2 mt-2 rounded-md bg-gray-300"
        onClick={handleDeletLastCat}
      >
        Delete last category
      </button>

      {category.map((cat) => {
        return <GifGrid category={cat} key={cat} />;
      })}
    </>
  );
};

export default GifExpertApp;
