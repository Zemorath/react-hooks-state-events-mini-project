import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, toggleCategory] = useState("All")
  const [list, setList] = useState(TASKS)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={TASKS} selectedCategory={selectedCategory} toggleCategory={toggleCategory} />
      <NewTaskForm categories={CATEGORIES} tasks={TASKS} list={list} setList={setList}/>
      <TaskList tasks={TASKS} selectedCategory={selectedCategory} list={list} setList={setList}/>
    </div>
  );
}

export default App;
