import React from 'react';

const Form = ({ inputText, todos, setTodos, setInputText, isDark }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    // console.log('1', inputText);
    console.log(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText('');
  };

  return (
    <form>
      <button
        onClick={submitTodoHandler}
        className={`todo-button ${isDark ? 'todo-buttonDark' : ''}`}
        type="submit">
        <span className={`chek`}></span>
      </button>
      <input
        placeholder="Create a new todo…"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className={` ${isDark ? ' todo-input' : ''}`}
      />
    </form>
  );
};

export default Form;
