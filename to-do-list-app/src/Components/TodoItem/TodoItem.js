import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li
      onClick={props.toggleComplete}
      style={{
        textDecoration: props.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {props.text}
    </li>
  );
};

export default TodoItem;
