import React, { useState } from "react";
import { v4 as uuid} from "uuid";

function NewTaskForm({ categories, list, setList }) {

  const [selectedCategory, changeCategory] = useState('Code')
  const [textInput, changeText] = useState('')

  function handleCategoryChange(e) {
    changeCategory(e.target.value)
  }

  function handleTextChange(e) {
    changeText(e.target.value)
  }

  function onTaskFormSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      text: textInput,
      category: selectedCategory
    };
    setList([...list, newItem])
  };
  

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categories.slice(1).map((e) => {
            return <option key={e}>{e}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={onTaskFormSubmit}/>
    </form>
  );
}

export default NewTaskForm;
