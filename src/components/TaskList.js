import React, { useState } from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid"


function TaskList({ tasks }) {

  const [list, setList] = useState(tasks)

  function handleClick(e) {
    const newList = list.filter((l) => l.text !== e);
    setList(newList)
  }

  const activeCategory = document.querySelector(".selected")

  
  const itemsToDisplay = list.filter((item) => {
    if (activeCategory == "All" || activeCategory == null) {
      return true
    } else {
      return item.category == activeCategory
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
