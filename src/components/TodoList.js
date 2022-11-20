import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
// import classes from './todoList.module.css';

export const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>What's the plan Today</h1>
      <TodoForm />
    </>
  );
};
