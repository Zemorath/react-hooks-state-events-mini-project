import React, { useState } from "react";


function CategoryFilter({ categories }) {
  const [selectedCategory, toggleCategory] = useState("")

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((e) => {
        return <button key={e} onClick={() => toggleCategory(e)} className={selectedCategory === e ? "selected" : ""}>{e}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
