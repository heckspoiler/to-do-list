import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          toggleComplete={() => props.toggleComplete(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
