import React from 'react';
import { BsXCircle } from 'react-icons/bs';
const Todo = ({ text, todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };

  return (
    <div className="todo">
      <button
        onClick={completeHandler}
        className={`complete-btn ${todo.completed ? 'complete-dark' : ''}`}></button>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
      <button onClick={deleteHandler} className="trash-btn">
        <span className="btnBoxs">
          <BsXCircle size={20} />
        </span>
      </button>
    </div>
  );
};

export default Todo;
