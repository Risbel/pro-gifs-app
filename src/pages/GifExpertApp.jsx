import { useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GifGrid } from "../components/GifGrid";

import { useSearchParams } from "react-router-dom";

export const GifExpertApp = () => {
  const [params, setParams] = useSearchParams();

  const paramethers = params.getAll("q");

  const [category, setCategories] = useState(paramethers);

  //----------------------------handlersClicks--------------

  const reset = () => {
    return setCategories([]);
  };

  const last = category.length - 1;

  const deletLastCat = () => {
    return setCategories(category.splice(0, last));
  };

  const deleteFirsCAt = () => {
    return setCategories(category.splice(1, last));
  };

  return (
    <>
      <h2 className="flex justify-center text-slate-100 text-md md:text-2xl pt-16">GiftExpertApp</h2>
      <div className="flex flex-col items-center px-2 md:px-8 text-slate-700 text-sm md:text-xl">
        <AddCategory setCategories={setCategories} setParams={setParams} category={category} />
        <div className="flex gap-2 text-[12px] md:text-xl">
          <button className="px-2 hover:bg-red-600 hover:text-white  rounded-md bg-gray-300" onClick={deleteFirsCAt}>
            Delete firs category
          </button>
          <button className="px-2 hover:bg-red-600 hover:text-white rounded-md bg-gray-300" onClick={reset}>
            Reset
          </button>
          <button className="px-2 hover:bg-red-600 hover:text-white  rounded-md bg-gray-300" onClick={deletLastCat}>
            Delete last category
          </button>
        </div>
      </div>
      {category.map((cat) => {
        return <GifGrid category={cat} key={cat} />;
      })}
    </>
  );
};
