import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const getLocalTodos = () => {
  let todos = localStorage.getItem('todos');
  console.log(todos);
  if (todos) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
};
const getIsDark = ()=>{
  let isdark = localStorage.getItem('isDark');
  if(isdark) {
    return JSON.parse(localStorage.getItem('isDark'));
  }else {
    return [];
  }
}

function App() {
  // state stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(getLocalTodos());
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isDark, setIsDark] = useState(getIsDark());
  // run once when the app start
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('isDark', JSON.stringify(isDark));
    // getLocalTodos();
  }, [todos, isDark]);
  // use effect
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
  }, [todos, status ]);
  // functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const toggleTheme = () => {
    setIsDark((previosValue) => !previosValue);
  };

  return (
    <div className={`boxAppp ${isDark ? 'boxAppDar' : 'boxAppp'}`}>
      <div className={`App ${isDark ? 'dark' : 'App'}`}>
        <div className="boxItem">
          <header className="headBox">
            <h1>Todo</h1>
            <div onClick={toggleTheme} className="toggle">
              {isDark ? <BsSun size={40} /> : <BsFillMoonStarsFill size={30} />}
            </div>
          </header>
          <Form
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            isDark={isDark}
            setInputText={setInputText}
            setIsDark={setIsDark}
          />

          <TodoList
            filteredTodos={filteredTodos}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
            isDark={isDark}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
