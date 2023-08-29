import React, { useState } from "react";


function CategoryFilter({ categories, toggleCategory, selectedCategory }) {

  function handleCategoryChange(e) {
    toggleCategory(e.target.textContent)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((e) => {
        return <button key={e} onClick={handleCategoryChange} className={selectedCategory === e ? "selected" : ""}>{e}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
