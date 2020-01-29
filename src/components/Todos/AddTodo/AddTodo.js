import React, { useState } from 'react';
import './AddTodo.css';

const AddTodo = ({ handleAddTodo }) => {
  const [input, setInput] = useState('');
  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Add Todo...'
      />
      <button
        onClick={() => {
          handleAddTodo(input);
          setInput('');
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
