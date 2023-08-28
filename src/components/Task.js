import React, { useState } from "react";


function Task({ text, category, onXClick}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onXClick(text)}>X</button>
    </div>
  );
}

export default Task;
