import React from "react";
import "../../styles/AddTask.css";

const AddTask = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "addTsk active" : "addTask"}
      onClick={() => setActive(false)}
    >
      <div
        classname={active ? "addTask__content active" : "addTask__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default AddTask;
