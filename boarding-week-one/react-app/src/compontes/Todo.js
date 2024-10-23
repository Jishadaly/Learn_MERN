import React, { useEffect, useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]); // To store the list of todos
  const [inputValue, setInputValue] = useState(''); // For the input field
  const [searchValue, setSearchVal] = useState('')

  // Function to handle adding a new task
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      console.log('ff');
      
      if (!todos.includes(inputValue)) {
        setTodos([...todos, inputValue]);
        setInputValue('');
      } else {
        alert('exist in list')
      }

    }
  };

  const filterdTodos = todos.filter((todo)=> { console.log('rerender');
  return todo.toLowerCase().includes(searchValue.toLowerCase())} )
  

  // Function to remove a task
  const handleRemoveTodo = (indexToRemove) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>To-Do App</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div className="todo-input">
        <input
          type="text"
          placeholder="search"
          value={searchValue}
          onChange={(e) => setSearchVal(e.target.value)}
        />

        {/* <button onClick={handleSearch}>search</button> */}

        <ul className="todo-list">
          {filterdTodos.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
              <button className="remove-btn" onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default TodoApp;