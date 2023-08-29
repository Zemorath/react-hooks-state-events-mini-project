import React, { useState } from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid"


function TaskList({ tasks, selectedCategory, list, setList }) {

  // const [list, setList] = useState(tasks)

  function handleClick(e) {
    const newList = list.filter((l) => l.text !== e);
    setList(newList)
  }

  const itemsToDisplay = list.filter((item) => {
    if (selectedCategory == 'All') {
      return true
    } else {
      return item.category == selectedCategory;
    }
  })

  return (
    <div className="tasks">
      {itemsToDisplay.map((task) => (
        <Task key={uuid()} text={task.text} category={task.category} onXClick={handleClick}/>
      ))}
    </div>
  );
}

export default TaskList;
