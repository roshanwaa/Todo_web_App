import { useState } from 'react';
import classes from './Css/TodoForm.module.css';
import uuid from 'react-uuid';

const uuiID = uuid();

export const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const changeHandler = (input) => {
    setInput(input.target.value);
    console.log(input.target.value);
  };

  const submitHandler = (value) => {
    value.preventDefault();

    props.onSubmit({
      id: uuiID,
      text: input,
    });

    setInput('');
  };

  return (
    <form className={classes.todoForm} action="" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={changeHandler}
        name="text"
        placeholder="Add a new Todo"
        className="inputTodo"
      />
      <button className="addTodoButton">Add Todo</button>
    </form>
  );
};
