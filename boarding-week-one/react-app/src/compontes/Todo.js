import React, { useState } from "react";


const TodoApp = () => {
  const [todos, setTodos] = useState([]); // To store the list of todos
  const [inputValue, setInputValue] = useState(''); // For the input field

  // Function to handle adding a new task
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {    
        
            setTodos([...todos, inputValue]);
            setInputValue(''); // Clear the input after adding.
}
  };

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

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button className="remove-btn" onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;