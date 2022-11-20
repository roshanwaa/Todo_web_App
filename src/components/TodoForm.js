import { useState } from 'react';
import classes from './Css/TodoForm.module.css';
import uuid from 'react-uuid';

export const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const changeHandler = (input) => {
    setInput(input.target.value);
    console.log(input.target.value);
  };

  const submitHandler = (value) => {
    value.preventDefault();
    // props.onSubmit({
    //   id: uuid(),
    //   text: input,
    // });
    setInput('');
    console.log(value);
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
      <button className="btn btn-primary">Add Todo</button>
    </form>
  );
};
