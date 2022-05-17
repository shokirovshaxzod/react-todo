import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos, setStatus, isDark }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div className={`todo-container ${isDark ? "todo-containerBox div": ''}`}>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} />
        ))}
        <div
          onClick={statusHandler}
          className={`todo-all ${filteredTodos.length ? filteredTodos.length === 0 : 'todo-none'}`}>
          <span>{filteredTodos.length} items left</span>
          <option className="all" value="all">
            All
          </option>
          <option className="Completed" value="completed">
            Completed
          </option>
          <option className="Completed" value="uncompleted">
            Uncompleted
          </option>
        </div>
      </ul>
    </div>
  );
};
export default TodoList;
