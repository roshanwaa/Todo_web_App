import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
// import classes from './todoList.module.css';

export const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...newTodos);
  };

  return (
    <>
      <h1>What's the plan Today</h1>
      <TodoForm onSubmit={addTodoHandler} />
    </>
  );
};
